# == Schema Information
#
# Table name: servers
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Server < ApplicationRecord
    validates :name, :owner_id, presence: true
    validates :name, uniqueness: true

    validate :image_size_constraint

    has_one_attached :image

    def image_size_constraint
    if image.attached?
      if image.blob.byte_size > 10000000
        image.purge
        render json: ["Image size too large"], status: 400
      end
    end
  end

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    has_many :server_memberships, 
        foreign_key: :server_id,
        class_name: :ServerMembership,
        dependent: :destroy

    has_many :users,
        through: :server_memberships,
        source: :users

    has_many :channels,
      foreign_key: :server_id,
      class_name: :Channel,
      dependent: :destroy

end
