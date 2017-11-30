class Survey < ActiveRecord::Base
  has_many :survey_items

  enum_attr :status, :in => [
    ['normal',   1, '正常'],
    ['deleted',  0, '已删除']
  ]
end
