class BrandCategory < ActiveRecord::Base
  validates :name, :position, :status, presence: true

  enum_attr :status, in: [
    ['normal', 1, '正常'],
    ['frost', -1, '删除']
  ]
end
