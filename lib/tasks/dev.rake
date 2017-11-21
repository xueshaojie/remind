# -*- encoding : utf-8 -*-

namespace :dev do

  desc 'build test data ...'
  task init: [
    :init_user_and_role,
    # :init_about_channels
  ]

  desc 'init role and user'
  task :init_user_and_role => :environment do
    puts 'Starting init role and user ******'

    role = Role.where(name: '系统管理员').first_or_create!
    # dept = Department.where(name: '后勤部', no: '123456').first_or_create!(parent_id: 0)
    user = User.where(login_name: 'biaotu').first_or_create!(
      name: '管理员',
      login_name: 'biaotu',
      password: 111111, password_confirmation: 111111,
    )

    UserRoleMap.where(user_id: user.id, role_id: role.id).first_or_create!
    puts "finish"

    puts 'Starting intit permissions ******'
    permission_list = {
      1 => '系统设置',
      2 => '员工管理',
      3 => '角色管理',
      4 => '商品分类',
      5 => '品牌管理',
      6 => '附件情况管理',
      7 => '内容管理',
      8 => '商铺管理',
      9 => '保证金流水',
    10 => '商品查询',
    11 => '订单查询'
    }

    permission_list.each do |key, value|
      permission = Permission.where(name: value).first_or_create

      RolePermissionMap.where(permission_id: permission.id, role_id: role.id).first_or_create
    end
    puts "finish"
  end

  task :init_shop_user_role => :environment do
    shop_role_list = {
      1 => '系统设置',
      2 => '员工管理',
      3 => '角色管理',
      4 => '商品分类',
      5 => '品牌管理',
      6 => '附件情况管理',
      7 => '内容管理',
      8 => '商铺管理',
      9 => '保证金流水',
    10 => '商品查询',
    11 => '订单查询'
    }
    shop_role_list.each do |key, value|
      shop_role = ShopRole.where(name: value).first_or_create
    end
    puts "完成shop_role权限初始化"
  end

end
