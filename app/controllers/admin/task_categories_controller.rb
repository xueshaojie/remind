class Admin::TaskCategoriesController < Admin::BaseController
  def index
    @search =  TaskCategory.search(params[:search])
    @task_categories = @search.order(:position).page(params[:page])
  end

  def show
    @task_category = TaskCategory.find(params[:id])
    render layout: 'application_pop'
  end

  def new
    @task_category = TaskCategory.new(params[:task_category])
    render layout: 'application_pop'
  end

  def create
    @task_category = TaskCategory.new(params[:task_category])
    if @task_category.save
      flash[:notice] = '保存成功'
      render inline: '<script>parent.location.reload();</script>'
    else
      return redirect_to :back, alert:'保存失败，请确认数据正确和必填项'
    end
  end

  def update
    @task_category = TaskCategory.find(params[:id])
    if @task_category.update_attributes(params[:task_category])
      flash[:notice] = '更新成功'
      render inline: '<script>parent.location.reload();</script>'
    else
      return redirect_to :back, alert:'更新失败，请确认数据正确和必填项'
    end
  end

  def destroy
    @task_category = TaskCategory.find(params[:id])
    if @task_category.task_templates.count > 0
      return redirect_to :back,alert:'该类型下，有相应的任务模版，不能删除!'
    elsif @task_category.destroy
      redirect_to :back, notice:'删除成功'
    else
      redirect_to :back, alert:'删除失败'
    end
  end

end