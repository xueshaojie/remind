class Admin::DepartmentsController < Admin::BaseController
  # before_filter :require_corp_set
  before_filter :find_department, only: [:edit, :update, :destroy, :sync, :normal, :disabled]

  def index
    @search = Department.search(params[:search])
    @departments = @search.order(:parent_id).page(params[:page])
  end

  def new
    @department = Department.new
    render layout: 'application_pop'
  end

  def create
    @department = Department.new(params[:department])

    if @department.save
      flash[:notice] = "保存成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      redirect_to :back , alert: '保存失败'
    end
  end

  def edit
    render layout: 'application_pop'
  end

  def update
    if @department.update_attributes(params[:department])
      flash[:notice] = "保存成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      redirect_to :back , alert: '保存失败'
    end
  end

  def destroy
    if @department.children.present? || @department.users.present?
      return redirect_to :back , alert: "不能删除含有子部门、成员的部门"
    end

    if @department.destroy
      flash[:notice] = "删除成功"
      redirect_to admin_departments_path
    else
      redirect_to :back , alert: "删除失败"
    end
  end

  def normal
    if @department.normal!
      redirect_to :back, notice: '启用成功!'
    else
      redirect_to :back, notice: '启用失败!'
    end
  end

  def disabled
    if @department.disabled!
      redirect_to :back, notice: '禁用成功!'
    else
      redirect_to :back, notice: '禁用失败!'
    end
  end

  private

    def find_department
      @department = Department.where(id: params[:id]).first
    end

end
