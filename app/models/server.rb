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

    has_one_attached :image


    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    has_many :server_memberships, 
        foreign_key: :server_id,
        class_name: :ServerMembership

    has_many :users,
        through: :server_memberships,
        source: :users


end
