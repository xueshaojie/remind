class GuideInfo < ActiveRecord::Base
  validates :title, :content, :guide_type, :position, presence: true

  enum_attr :guide_type, in: [
    ['help', 1, '帮助中心'],
    ['about', 0, '关于我们']
  ]

end