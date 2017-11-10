class Admin::TasksController < Admin::BaseController

  def index
    params[ :search ] ||=  {}
    if params[:search][:start_at_end_at_between]
      params[:search][:task_start_at_gte], params[:search][:task_end_at_lte] = params[:search].delete(:start_at_end_at_between).split(' - ')
    end

    @search = Task.not_deleted.search(params[:search])
    @tasks = @search.order("updated_at desc").page(params[:page])
  end

  def show
    @task = Task.find(params[:id])
    @task_records = @task.task_records
  end

  # def new
  #   @task = Task.new
  #   render layout: 'application_pop'
  # end
  #
  # def create
  #   @task = Task.new(params[:task])
  #   if @task.save
  #     flash[:notice] = "保存成功"
  #     render inline: "<script>parent.location.reload();</script>"
  #   else
  #     return redirect_to :back , alter: '保存失败，请确认数据正确和必填．'
  #   end
  # end
  #
  # def edit
  #   render layout: 'application_pop'
  # end
  #
  # def update
  #   if @task.update_attributes(params[:task])
  #     flash[:notice] = "更新成功"
  #     render inline: "<script>parent.location.reload();</script>"
  #   else
  #     return redirect_to :back , alter: '更新失败，请确认数据正确和必填．'
  #   end
  # end
  #
  # def destroy
  #   @task = Task.find(params[:id])
  #   if @task.destroy
  #     redirect_to :back, notice: '删除成功'
  #   else
  #     redirect_to :back, notice: '删除失败'
  #   end
  # end
  #
  # private
  # def find_task
  #   @task = Task.find(params[:id])
  # end
end
