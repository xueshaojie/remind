class AddPayInfoToShopCustomer < ActiveRecord::Migration
  def change
    add_column :shop_customers, :pay_info, :string
  end
end
