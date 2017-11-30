class SurveyResult < ActiveRecord::Base

  store :metadata, accessors: [:event_name, :exposure, :interaction, :sales_volume, :precipitate_fans, :implementation_costs]
  serialize :result, Array

  belongs_to :wx_user

  enum_attr :status, :in => [
    ['normal',   1, '正常'],
    ['deleted',  0, '已删除']
  ]

  enum_attr :survey_type, :in => [
    ['energy', 1, '营销能量'],
    ['effect', 2, '营销执行效果'],
    ['income', 3, '企业营销收益']
  ]

end
