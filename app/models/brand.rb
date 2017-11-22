class Brand < ActiveRecord::Base
  validates :name, :name_en, :position, :status, presence: true

  enum_attr :status, in: [
    ['normal', 1, '正常'],
    ['frost', -1, '删除']
  ]
  has_many :products
  has_many :brand_category_maps
  has_many :product_categories, through: :brand_category_maps
end
