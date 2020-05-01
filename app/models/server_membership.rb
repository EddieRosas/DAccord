# == Schema Information
#
# Table name: server_memberships
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  server_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ServerMembership < ApplicationRecord

    validates :user_id, :server_id, presence: true
    validates :user_id, uniqueness: {scope: :server_id, message: "User is already a member of this server"}

    belongs_to :users,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :servers, 
        foreign_key: :server_id,
        class_name: :Server

end
