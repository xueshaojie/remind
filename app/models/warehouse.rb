class Warehouse < ActiveRecord::Base
  validates :shop_id, :name, :description, presence: true
  enum_attr :status, in: [
    ['normal', 1, '正常'],
    ['frost', -1, '冻结']
  ]

  belongs_to :shop
  has_many :products

end

