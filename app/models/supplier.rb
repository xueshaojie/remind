class Supplier < ActiveRecord::Base
  validates :name, uniqueness: true
  acts_as_enum :status, :in => [
    ['normal', 1, '正常'],
    ['disabled', -1, '已删除']
  ]

  # enum_attr :gender, in: [
  #   ['normal', 1, '男'],
  #   ['frost', 2, '女']
  # ]

  belongs_to :shop
  has_many :products

end