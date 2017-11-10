class Admin::IssueTypesController < Admin::BaseController
  before_filter :find_issue_type, only: [:new, :create, :edit, :updat, :show, :destroy]

  def index
    @search = IssueType.search(params[:search])
    @issue_types = @search.order(:position).page(params[:page])
  end

  def new
    @issue_type = IssueType.new
    render layout: 'application_pop'
  end

  def create
    @issue_type = IssueType.new(params[:issue_type])
     if @issue_type.save
      flash[:notice] = "保存成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      redirect_to :back, alert: "保存失败"
    end
  end

  def edit
    render layout: 'application_pop'
  end

  def update
    @issue_type = IssueType.find(params[:id])
    if @issue_type.update_attributes(params[:issue_type])
      flash[:notice] = "更新成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      redirect_to :back, alert: '更新失败'
    end
  end

  def destroy
    if @issue_type.issues.count > 0
      return redirect_to :back, alert: '该类型已被使用，不能删除'
    else
      if @issue_type.destroy
        redirect_to :back, notice: '删除成功'
      else
        redirect_to :back, alert: '删除失败' 
      end
    end
  end

  private

  def find_issue_type
    @issue_type = IssueType.where(id: params[:id]).first
  end

end