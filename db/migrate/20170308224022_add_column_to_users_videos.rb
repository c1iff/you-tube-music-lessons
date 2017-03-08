class AddColumnToUsersVideos < ActiveRecord::Migration[5.0]
  def change
    add_column :videos, :user_id, :integer
    add_column :videos, :category, :string
  end
end
