class CreateWarehouseCheckItems < ActiveRecord::Migration
  def change
    create_table :warehouse_check_items do |t|
      t.integer :warehouse_check_id, null: false
      t.integer :product_id, null: false
      t.integer :store_qty, default: 0, null: false
      t.integer :real_qty, default: 0, null: false
      t.integer :status, default: 0, null: false

      t.timestamps
    end
  end
end
