class Api::TasksController < ActionController::Base
  before_filter :set_headers

  def index
    department_id = params[:deptID].to_i
    if department_id > 0
      date = Date.today
      quarter = date.month < 4 ? 1 : (date.month < 7 ? 2 : (date.month < 10 ? 3 : 4))

      total_tasks = Task.where("tasks.status > ? and department_id = ? and id > ?", -1, department_id, params[:lasttaskID].to_i)
      tasks1 = total_tasks.not_deleted.task_type1.where("time_info like ?", "#{date.to_s}%")
      tasks2 = total_tasks.not_deleted.task_type2.where(time_info: "#{date.year}年#{date.month}月")
      tasks3 = total_tasks.not_deleted.task_type3.where(time_info: "#{date.year}年第#{quarter}季度")
      tasks4 = total_tasks.not_deleted.task_type4.where(time_info: "#{date.year}#{date.month < 7 ? '上' : '下'}半年")
      tasks5 = total_tasks.not_deleted.task_type5.where(time_info: "#{date.year}年")
      @tasks = tasks1 + tasks2 + tasks3 + tasks4 + tasks5
    else
      @tasks = []
    end
  end

  private

    def set_headers
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Methods'] = '*'
      headers['Access-Control-Allow-Headers'] = '*'
    end

end