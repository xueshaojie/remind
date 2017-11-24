class AddStatusToTags < ActiveRecord::Migration
  def change
  	add_column :tags, :status, :integer, default: 1
  end
end
