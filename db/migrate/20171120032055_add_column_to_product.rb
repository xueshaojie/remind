class AddColumnToProduct < ActiveRecord::Migration
  def change
    add_column :products, :shop_user_id, :integer, null: false
    add_column :products, :create_shop_user_id, :integer, null: false
    add_column :products, :wages, :decimal, :precision => 12, :scale => 2
    add_column :products, :adjustment_reason, :text
  end
end
