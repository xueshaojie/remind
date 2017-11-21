class AddExistCountToProduct < ActiveRecord::Migration
  def change
    add_column :products, :sold_count, :integer, default: 0, null: false
    add_column :products, :exist_count, :integer, default: 0, null: false
  end
end
