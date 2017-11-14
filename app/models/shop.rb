class Shop < ActiveRecord::Base

  enum_attr :status, in: [
    ['normal', 1, '正常'],
    ['frost', -1, '冻结']
  ]
  enum_attr :scale, in: [
    ['small', 1, '小型'],
    ['medium', 2, '中型'],
    ['large', 3, '大型']
  ]
  enum_attr :credit, in: [
    ['one', 1, '1分'],
    ['two', 2, '2分'],
    ['three', 3, '3分'],
    ['four', 4, '4分'],
    ['five', 5, '5分']
  ]
  has_one :admin_shop_user, class_name: 'ShopUser', conditions: {user_type: ShopUser::MANAGER}
  # has_one :ready_activity_notice, class_name: 'ActivityNotice', conditions: { activity_status: ActivityNotice::READY }
  belongs_to :province
  belongs_to :city
  belongs_to :district
  has_many :shop_deposit_logs

  # accepts_nested_attributes_for :ready_activity_notice, :active_activity_notice, :stopped_activity_notice
  accepts_nested_attributes_for :admin_shop_user

end