class ProductCategory < ActiveRecord::Base
  # has_many :tasks
  # has_many :task_templates
  # validates :name, :position, presence: true
  enum_attr :status, in: [
    ['normal', 1, '正常'],
    ['frost', -1, '删除']
  ]
end
