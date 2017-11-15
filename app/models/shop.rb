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
  belongs_to :province
  belongs_to :city
  belongs_to :district
  has_many :shop_deposit_logs
  has_many :warehouses
  has_many :shop_users
  has_many :products
  has_many :orders
  has_many :shop_customers
  has_many :suppliers

  accepts_nested_attributes_for :admin_shop_user

end
