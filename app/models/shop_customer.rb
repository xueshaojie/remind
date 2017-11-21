class ShopCustomer < ActiveRecord::Base
  validates :shop_id, :name, :mobile, presence: true

  belongs_to :shop
  has_many :orders

  enum_attr :status, in: [
    ['normal', 1, '正常'],
    ['frost', -1, '冻结']
  ]

  enum_attr :gender, in: [
    ['normal', 1, '男'],
    ['frost', 2, '女']
  ]
end
