class ChangeDetailInProduct < ActiveRecord::Migration
  def change
    add_column :products, :shop_customer_id, :integer, null: false
    remove_column :products, :supplier_id
  end
end
