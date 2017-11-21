class ChangeDefaultInShop < ActiveRecord::Migration
  def change
    change_column_default :shops, :province_id, 9
    change_column_default :shops, :city_id, 73
    change_column_default :shops, :district_id, 732
  end
end
