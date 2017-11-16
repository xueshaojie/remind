class Order < ActiveRecord::Base
  validates :shop_id, :shop_customer_id, :amount, :status, presence: true

  belongs_to :shop
  belongs_to :shop_customer_id
  has_many :order_items
end
