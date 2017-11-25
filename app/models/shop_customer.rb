class ShopCustomer < ActiveRecord::Base
  validates :shop_id, :name, :mobile, :status, :position, presence: true

  belongs_to :shop
  has_many :orders
  has_many :products

  enum_attr :status, in: [
    ['normal', 1, '正常'],
    ['frost', -1, '冻结']
  ]

  enum_attr :gender, in: [
    ['gender1', 1, '男'],
    ['gender2', 2, '女']
  ]
end
