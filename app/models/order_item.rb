class OrderItem < ActiveRecord::Base
  validates :product_id, :price, :quantity, presence: true
  belongs_to :order
  belongs_to :product

  before_validation :set_attrs

  private

    def set_attrs
      self.price = self.product.sell_price
      self.total_price= self.price * self.quantity
    end
end
