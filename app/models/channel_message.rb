class ChannelMessage < ApplicationRecord

    validates :body, presence: true
    validates :body, length: { minimum: 1 }

    belongs_to :channel,
        foreign_key: :channel_id,
        class_name: :Channel

end
