class Channel < ApplicationRecord
    validates :name, :server_id, presence: true

    has_many :messages,
        foreign_key: :channel_id,
        class_name: :ChannelMessage

    belongs_to :server,
        foreign_key: :server_id,
        class_name: :Server

end
