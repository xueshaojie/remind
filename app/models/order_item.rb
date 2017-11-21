class OrderItem < ActiveRecord::Base
  validates :order_id, :product_id, :price, :quantity, presence: true
  belongs_to :order
  belongs_to :product
end
