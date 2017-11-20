class CreateBrandCategoryMaps < ActiveRecord::Migration
  def change
    create_table :brand_category_maps do |t|
      t.integer :brand_id
      t.integer :product_category_id
      t.integer :position, default: 1, null: false
      t.timestamps
    end
  end
end
