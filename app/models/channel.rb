# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  server_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Channel < ApplicationRecord
    validates :name, :server_id, presence: true
    validates :name, length: { minimum: 2, maximum: 21 }

    has_many :messages,
        foreign_key: :channel_id,
        class_name: :ChannelMessage

    belongs_to :server,
        foreign_key: :server_id,
        class_name: :Server

end
