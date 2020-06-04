# == Schema Information
#
# Table name: channel_messages
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer
#
class ChannelMessage < ApplicationRecord

    validates :body, :author_id, :channel_id, presence: true
    validates :body, length: { minimum: 1 }

    belongs_to :channel,
        foreign_key: :channel_id,
        class_name: :Channel

    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User

end
