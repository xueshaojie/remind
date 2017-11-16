class AddGenderToSupplier < ActiveRecord::Migration
  def change
    add_column :suppliers, :gender, :integer
  end
end
