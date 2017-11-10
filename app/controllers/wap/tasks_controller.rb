class Wap::TasksController < Wap::BaseController

  def show
    @task_template = TaskTemplate.where(id: params[:id].to_s.sub('task-', '')).first
    return render text: '任务不存在' unless @task_template

    @task = @task_template.tasks.finished.last
  end

end