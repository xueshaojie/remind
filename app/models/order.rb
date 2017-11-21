class Order < ActiveRecord::Base
  validates :shop_id, :shop_customer_id, :amount, :status, presence: true

  belongs_to :shop
  belongs_to :shop_customer
  has_many :order_items

  accepts_nested_attributes_for :order_items, :allow_destroy => true

  enum_attr :settlement_type, in: [
    ['cashpay', 1, '现金支付'],
    ['wxpay', 2, '支付宝'],
    ['alipay', 3, '微信支付']
  ]

  enum_attr :dilivery_way, in: [
    ['pickup', 1, '自提'],
    ['to_door', 2, '送货上门']
  ]

  enum_attr :status, in: [
    ['pending', 0, '待处理'],
    ['canceled', -1, '已取消']
  ]
end
