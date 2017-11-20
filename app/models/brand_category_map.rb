class BrandCategoryMap < ActiveRecord::Base
  belongs_to :brand
  belongs_to :product_category
end
