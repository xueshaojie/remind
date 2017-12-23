class Currency < ActiveRecord::Base

  validates :name, presence: true

  has_many :notices

  enum_attr :status, :in => [
    ['normal',   1, '正常'],
    ['deleted',  0, '已删除']
  ]

  default_scope { order("currencies.position desc, currencies.rank") }

end
