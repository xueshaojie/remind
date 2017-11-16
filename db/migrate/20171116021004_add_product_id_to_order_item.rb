class AddProductIdToOrderItem < ActiveRecord::Migration
  def change
    add_column :order_items, :product_id, :integer, null: false
  end
end
