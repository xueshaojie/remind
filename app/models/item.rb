class Item < ActiveRecord::Base

 # has_many :visit_items
 # has_many  :visits, through: :visit_items

  enum_attr :status, in:[
    ['start', 1, '启用'],
    ['stop', 2, '停用']
  ]


end