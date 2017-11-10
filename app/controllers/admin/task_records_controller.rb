class Admin::TaskRecordsController < Admin::BaseController

  def index
    params[ :search ] ||=  {}
    if params[:search][:check_at_between]
      params[:search][:check_at_gte], params[:search][:check_at_lte] = params[:search].delete(:check_at_between).split(' - ')
    end
    @search = TaskRecord.search(params[:search])
    @task_records = @search.order("created_at desc").page(params[:page])
  end
end
