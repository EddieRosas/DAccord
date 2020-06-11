# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'open-uri'

class User < ApplicationRecord
    validates :email, :username, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :username, length: { maximum: 10 }

    attr_reader :password

    has_one_attached :image

    after_initialize :ensure_session_token, :ensure_default_icon

    has_many :owned_servers,
        foreign_key: :owner_id,
        class_name: :Server 

    has_many :server_memberships,
        foreign_key: :user_id,
        class_name: :ServerMembership,
        dependent: :destroy

    has_many :servers,
        through: :server_memberships,
        source: :servers

    has_many :messages,
        foreign_key: :author_id,
        class_name: :ChannelMessage

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def ensure_default_icon
        unless self.image.attached?
            icons = [
                "https://active-storage-daccord-seeds.s3-us-west-1.amazonaws.com/blue-default-icon.png",
                "https://active-storage-daccord-seeds.s3-us-west-1.amazonaws.com/green-default-icon.png",
                "https://active-storage-daccord-seeds.s3-us-west-1.amazonaws.com/grey-default-icon.png",
                "https://active-storage-daccord-seeds.s3-us-west-1.amazonaws.com/red-default-icon.png",
                "https://active-storage-daccord-seeds.s3-us-west-1.amazonaws.com/yellow-default-con.png"
            ]
            file = open(icons.sample)
            self.image.attach(io: file, filename: 'server-default-icon.png')
        end
    end

end
