class GuideInfo < ActiveRecord::Base
  enum_attr :guide_type, in: [
    ['help', 1, '帮助中心'],
    ['about', 0, '关于我们']
  ]

end