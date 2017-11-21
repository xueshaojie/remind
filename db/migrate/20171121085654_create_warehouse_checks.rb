class CreateWarehouseChecks < ActiveRecord::Migration
  def change
    create_table :warehouse_checks do |t|
      t.integer :shop_id, null: false
      t.integer :shop_user_id, null: false
      t.integer :warehouse_id, null: false
      t.datetime :start_at
      t.datetime :end_at
      t.integer :status, default: 0, null: false

      t.timestamps
    end
  end
end
