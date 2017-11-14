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
      # 3 => '部门管理',
      4 => '角色管理',
      5 => '商品类型',
      6 => '品牌类型',
      7 => '任务记录',
      8 => '来访管理',
      9 => '供应商管理',
      10 => '仓库管理',
      11 => '资产分类管理',
      12 => '资产采购管理',
      13 => '资产管理',
      14 => '领用归还记录',
      15 => '资产管理',
      16 => '批次管理',
      17 => '资产调整记录',
      18 => '资产管理',
      19 => '资产调整记录',
      20 => '盘点查询',
      21 => '问题类型',
      22 => '问题管理'
    }

    permission_list.each do |key, value|
      permission = Permission.where(name: value).first_or_create

      RolePermissionMap.where(permission_id: permission.id, role_id: role.id).first_or_create
    end
    puts "finish"
  end

  task :init_shop_user_role => :environment do
    shop_role = ShopRole.where(name: '商户管理员').first_or_create!
    shop_user = ShopUser.find(2)
    ShopUserRoleMap.where(shop_user_id: shop_user.id, shop_role_id: shop_role.id).first_or_create!

    permission_list = {
      1 => '系统设置',
      2 => '员工管理',
      # 3 => '部门管理',
      4 => '角色管理',
      5 => '商品类型',
      6 => '品牌类型',
      7 => '任务记录',
      8 => '来访管理',
      9 => '供应商管理',
      10 => '仓库管理',
      11 => '资产分类管理',
      12 => '资产采购管理',
      13 => '资产管理',
      14 => '领用归还记录',
      15 => '资产管理',
      16 => '批次管理',
      17 => '资产调整记录',
      18 => '资产管理',
      19 => '资产调整记录',
      20 => '盘点查询',
      21 => '问题类型',
      22 => '问题管理'
    }

    permission_list.each do |key, value|
      permission = Permission.where(name: value).first_or_create
      RolePermissionMap.where(permission_id: permission.id, role_id: shop_role.id).first_or_create
    end
    puts "完成shop_user的权限赋给"
  end

end
