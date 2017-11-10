# -*- encoding : utf-8 -*-

namespace :dev do

  desc 'build test data ...'
  task init: [
    :init_user_and_role,
    :init_categories,
    # :init_about_channels
  ]

  desc 'init role and user'
  task :init_user_and_role => :environment do
    puts 'Starting init role and user ******'

    role = Role.where(name: '系统管理员').first_or_create!
    dept = Department.where(name: '后勤部', no: '123456').first_or_create!(parent_id: 0)
    user = User.where(mobile: '18612345678').first_or_create!(
      department_id: dept.id,
      name: '管理员',
      login_name: 'admin',
      password: 111111, password_confirmation: 111111,
      no: '123456'
    )

    UserRoleMap.where(user_id: user.id, role_id: role.id).first_or_create!
    puts "finish"

    puts 'Starting intit permissions ******'
    permission_list = {
      1 => '系统设置',
      2 => '员工管理',
      3 => '部门管理',
      4 => '角色管理',
      5 => '任务模板',
      6 => '任务查询',
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

  desc 'init categories'
  task :init_categories => :environment do
    puts 'Starting intit categories ******'

    ['基地基础巡检','基地专业巡检','水面违法巡检','保护区环境巡检','物种保护任务'].each do |name|
      TaskCategory.where(name: name).first_or_create
    end

    puts "finish"
  end

end
