class Visit < ActiveRecord::Base
  # attr_accessible :car_no, :description, :receiver_id, :status, :tel, :user_id, :username, :visit_at, :visit_count, :visit_level, :visit_open_zone_id, :visit_type_id

  validates :username, :tel, :user_id, :receiver_id, :visit_count, :visit_at, presence: true
  store :metadata, accessors: [:reception_region, :reception_line, :reception_ready, :reception_feedback, :is_dinner, :dinner_count, :is_stay, :stay_count]

  has_many :visit_items
  has_many :items, through: :visit_items

  enum_attr :status, in: [
    ['deleted', -1, '已删除'],
    ['created', 0, '未来访'],
    ['pending', 1, '已完成来访准备'],
    ['done', 2, '已完成来访'],
  ]

  acts_as_enum :visit_grade, :in => [
    ['ordinary', 1, '一级'],
    ['important', 2, '二级']
  ]

  acts_as_enum :visit_type_id, :in => [
    ['visit_type1', 1, '来访'],
    ['visit_type2', 2, '访问']
  ]


  acts_as_enum :reception_grade, :in => [
    ['reception_type1', 1, 'A级'],
    ['reception_type2', 2, 'B级'],
    ['reception_type3', 3, 'C级']
  ]

  # acts_as_enum :item_id, :in => [
  #   ['item_type1', 1, '摄影／摄像'],
  #   ['item_type2', 2, '实验演示'],
  #   ['item_type3', 3, '会议室'],
  #   ['item_type4', 4, '潜水'],
  #   ['item_type5', 5, '治疗演示']

  # ]

  acts_as_enum :visit_at, :in => [
    ['task_type8', 8, '8时' ],
    ['task_type9', 9, '9时'],
    ['task_type10', 10, '10时'],
    ['task_type11', 11, '11时'],
    ['task_type12', 12, '12时'],
    ['task_type13', 13, '13时'],
    ['task_type14', 14, '14时'],
    ['task_type15', 15, '15时'],
    ['task_type16', 16, '16时'],
    ['task_type17', 17, '17时'],
    ['task_type18', 18, '18时'],
    ['task_type19', 19, '19时'],
    ['task_type20', 20, '20时'],
    ['task_type21', 21, '21时']
  ]

  belongs_to :user
  belongs_to :receiver, class_name: 'User'

  def is_dinner?
    is_dinner.to_i == 1
  end

  def is_stay?
    is_stay.to_i == 1
  end

  def dinner_info
    is_dinner? ? "#{dinner_count}人" : '不安排'
  end

  def stay_info
    is_stay? ? "#{stay_count}人" : '不安排'
  end

  def reception_grade_class
    { 1 => 'dengjia', 2 => 'dengjib', 3 => 'dengjic' }[reception_grade]
  end

  def car_no_info
    car_no.blank? ?  '' : "(#{car_no})"
  end


end