class Admin::VisitsController < Admin::BaseController
  before_filter :find_visit, only: [:show, :edit, :update, :destroy, :pending, :done]

  def index
    params[:search] ||= {}
    params[:search][:visit_date_gte], params[:search][:visit_date_lte] = params[:search].delete(:visit_date_between).split(' - ') if params[:search][:visit_date_between]

    @search = Visit.search(params[:search])
    @visits = @search.order("visit_date desc").page(params[:page])
  end

  def show
    render layout: 'application_pop'
  end

  def new
    @visit = current_user.visits.new(params[:visit])
    render layout: 'application_pop'
  end

  def create
    @visit = current_user.visits.new(params[:visit])
    if @visit.save!
      flash[:notice] = "保存成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      return redirect_to :back, alert: '保存失败，请确认数据正确和必填项。'
    end
  end

  def update
    if @visit.update_attributes!(params[:visit])
      flash[:notice] = "更新成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      return redirect_to :back, alert: '更新失败，请确认数据正确和必填项。'
    end
  end

  def destroy
    @visit = Visit.find(params[:id])
    if @visit.destroy
      redirect_to :back, notice: '删除成功'
    else
      redirect_to :back, alert: '删除失败'
    end
  end

  def pending
    if @visit.pending!
      redirect_to :back, notice: '已完成来访准备'
    else
      redirect_to :back,alert: '操作失败'
    end
  end

  def done
    if @visit.done!
      redirect_to :back, notice: '已完成来访'
    else
      redirect_to :back, alert: '操作失败'
    end
  end

  private

  def find_visit
    @visit = Visit.find(params[:id])
  end

end
