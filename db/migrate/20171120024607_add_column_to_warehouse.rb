class AddColumnToWarehouse < ActiveRecord::Migration
  def change
    add_column :warehouses, :storage_count, :integer, default: 0, null: false
    add_column :warehouses, :sold_count, :integer, default: 0, null: false
    add_column :warehouses, :exist_count, :integer, default: 0, null: false
  end
end
