class AddAuthorIdToChannelMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :channel_messages, :author_id, :integer
  end
end
