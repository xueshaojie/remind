class Product < ActiveRecord::Base
  validates :shop_id, :product_category_id, :brand_id, :supplier_id, :warehouse_id, :name, :quantity, :status, :position,
            :shop_user_id, :create_shop_user_id, :sold_count, :exist_count, presence: true

  belongs_to :shop
  belongs_to :supplier
  belongs_to :brand
  belongs_to :product_category
  belongs_to :warehouse
  belongs_to :shop_user
  belongs_to :create_shop_user, class_name: 'ShopUser', foreign_key: 'create_shop_user_id'
  has_many :order_items

  enum_attr :source, in: [
    ['source1', 1, '来源1'],
    ['source2', 2, '来源2']
  ]

  before_create :generate_no

  private
    def generate_no
      self.no = Concerns::OrderNoGenerator.generate
    end

end
