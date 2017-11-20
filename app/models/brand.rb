class Brand < ActiveRecord::Base
  enum_attr :status, in: [
    ['normal', 1, '正常'],
    ['frost', -1, '删除']
  ]
  has_many :products
  has_many :brand_category_maps
end
