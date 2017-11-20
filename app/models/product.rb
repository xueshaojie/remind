class Product < ActiveRecord::Base
  validates :name, presence: true

  belongs_to :shop
  belongs_to :supplier
  belongs_to :brand
  belongs_to :product_category
  belongs_to :shop_user
  belongs_to :create_shop_user, class_name: 'ShopUser', foreign_key: 'create_shop_user_id'
  has_many :order_items

end
