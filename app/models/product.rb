class Product < ActiveRecord::Base
  validates :shop_id, :product_category_id, :brand_id, :shop_customer_id, :warehouse_id, :name, :quantity, :status, :position,
            :shop_user_id, :create_shop_user_id, :sold_count, :exist_count, presence: true

  belongs_to :shop
  belongs_to :supplier
  belongs_to :brand
  belongs_to :product_category
  belongs_to :warehouse
  belongs_to :shop_user
  belongs_to :shop_customer
  belongs_to :create_shop_user, class_name: 'ShopUser', foreign_key: 'create_shop_user_id'
  has_many :order_items
  has_many :product_tags
  has_many :tags, through: :product_tags

  enum_attr :source, in: [
    ['recycle', 1, '回收'],
    ['consign', 2, '寄售']
  ]

  enum_attr :adjustment_reason, in: [
    ['give_back', 1, '退还来源方'],
    ['undefined', 2, '未设定']
  ]

  before_create :generate_no

  def change_qty!(options = {})
    update_attributes(quantity: options[:quantity], adjustment_reason: options[:adjustment_reason])

    return true
  rescue => e
    Rails.logger.info e
    return false
  end

  private
    def generate_no
      self.no = Concerns::OrderNoGenerator.generate
    end

end
