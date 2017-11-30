class Survey < ActiveRecord::Base
  has_many :survey_items

  enum_attr :status, :in => [
    ['normal',   1, '正常'],
    ['deleted',  0, '已删除']
  ]

  enum_attr :option_type, :in => [
    ['radio',        1, '单选'],
    ['multiselect',  2, '多选']
  ]

  enum_attr :survey_type, :in => [
    ['energy', 1, '营销能量'],
    ['effect', 2, '营销执行效果'],
    ['income', 3, '企业营销收益']
  ]

  default_scope { order("surveys.survey_type, surveys.position") } 

end
