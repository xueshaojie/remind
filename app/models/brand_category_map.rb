class BrandCategoryMap < ActiveRecord::Base
  validates :brand_id, :product_category_id, presence: true
  belongs_to :brand
  belongs_to :product_category
end
