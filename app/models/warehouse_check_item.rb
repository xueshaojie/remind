class WarehouseCheckItem < ActiveRecord::Base
  validates :warehouse_check_id, :product_id, :store_qty, :real_qty, :status, presence: true
  belongs_to :warehouse_check
  belongs_to :product

  enum_attr :status, in: [
    ['pending', 0, '未盘点'],
    ['overage', 1, '盘盈'],
    ['shortage', -1, '盘亏']
  ]

  def check!(qty)
    qty = qty.to_i
    if qty > store_qty
      update_attributes(real_qty: qty, status: OVERAGE)
    else
      update_attributes(real_qty: qty, status: SHORTAGE)
    end

    return true
  end
end
