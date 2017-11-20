class AddColumnToOrder < ActiveRecord::Migration
  def change
    add_column :orders, :settlement_type, :integer
    add_column :orders, :express_photo, :string
  end
end
