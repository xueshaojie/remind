class RemoveBrandCategoryidInBrand < ActiveRecord::Migration
  def change
    remove_column :brands, :brand_category_id
  end
end
