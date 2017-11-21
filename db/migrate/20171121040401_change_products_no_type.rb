class ChangeProductsNoType < ActiveRecord::Migration
  def up
    change_column :products, :no, :string
  end

  def down
    change_column :products, :no, :integer
  end
end
