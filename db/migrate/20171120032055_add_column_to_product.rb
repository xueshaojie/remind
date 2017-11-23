class AddColumnToProduct < ActiveRecord::Migration
  def change
    add_column :products, :shop_user_id, :integer, null: false
    add_column :products, :create_shop_user_id, :integer, null: false
    add_column :products, :wages, :decimal, :precision => 12, :scale => 2
    add_column :products, :adjustment_reason, :integer
    add_column :products, :sold_count, :integer, default: 0, null: false
    add_column :products, :exist_count, :integer, default: 0, null: false
  end
end
