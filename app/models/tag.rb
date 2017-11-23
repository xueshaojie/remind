class Tag < ActiveRecord::Base
  validates :name, presence: true
  has_many :product_tags
  has_many :products, through: :product_tags

  has_many :auction_product_tag_maps
  has_many :auction_products, through: :auction_product_tag_maps

  enum_attr :status, in: [
    ['normal', 1, '正常'],
    ['frost', -1, '删除']
  ]
end
