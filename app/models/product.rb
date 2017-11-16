class Product < ActiveRecord::Base
  validates :name, presence: true

  belongs_to :shop
  belongs_to :supplier
  belongs_to :brand
  belongs_to :product_category
  has_many :order_items

end
