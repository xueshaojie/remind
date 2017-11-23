class Tag < ActiveRecord::Base
  validates :name, presence: true
  has_many :product_tags
  has_many :products, through: :product_tags

  has_many :auction_tags
  has_many :auctions, through: :auction_tags

  enum_attr :status, in: [
    ['normal', 1, '正常'],
    ['frost', -1, '删除']
  ]
end
