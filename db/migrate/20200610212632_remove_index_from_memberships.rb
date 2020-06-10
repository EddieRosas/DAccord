class RemoveIndexFromMemberships < ActiveRecord::Migration[5.2]
  def change
    remove_index :server_memberships, name: "index_server_memberships_on_user_id"
    remove_index :server_memberships, name: "index_server_memberships_on_server_id"

    add_index :server_memberships, :server_id
    add_index :server_memberships, [:user_id, :server_id], unique: true

  end
end
