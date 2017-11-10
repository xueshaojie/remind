class UsersController < ApplicationController

  def index
    @users = []
    if params[:three_department_id].present? && params[:type].present?
      # User.where(three_department_id: params[:three_department_id].to_i, user_type_id: 2).each do |t|
      #   @users.push(t) if t.normal?
      # end
      department = Department.where(id: params[:three_department_id]).first
      if department
         @users.push(department.user)
      end
    else
      User.where(three_department_id: params[:three_department_id].to_i).each do |t|
        @users.push(t) if t.normal?
      end
    end

    respond_to do |format|
      format.json { render json: @users }
    end
  end

  def find
    if params[:department_id]
      department = Department.where(id: params[:department_id]).first
      if department
        manager = department.asset_user.try(:name)
        user_id = department.asset_user.try(:id)
      else
        manager = '该部门下无对应的管理员'
        user_id = 0
      end
      # User.where(department_id: params[:department_id]).each do |t|
      #   if t.asset_manager?
      #     @manager = t.name
      #     @user_id = t.id
      #     break
      #   end
      # end
    else
      manager = '该部门下无对应的管理员'
      user_id = 0
    end
    respond_to do |format|
      format.json { render json: {name: manager, user_id: user_id} }
    end
  end

end
