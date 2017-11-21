class WarehouseCheck < ActiveRecord::Base
  validates :shop_id, :shop_user_id, :warehouse_id, :status, presence: true
  has_many :warehouse_check_items
  belongs_to :shop
  belongs_to :shop_user
  belongs_to :warehouse

  before_create :init_item_data

  enum_attr :status, in: [
    ['pending', 0, '未盘点'],
    ['checking', 1, '进行中'],
    ['finished', 2, '已完成']
  ]

  private

    def init_item_data
      warehouse.products.where("quantity > 0").each do |product|
        self.warehouse_check_items.new(product_id: product.id, store_qty: product.quantity)
      end
    end
end
