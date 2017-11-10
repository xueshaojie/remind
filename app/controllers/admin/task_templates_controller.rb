class Admin::TaskTemplatesController < Admin::BaseController
  before_filter :find_task_template, only: [:edit, :update, :destroy, :on, :off, :qrcode, :download, :copy, :delete_current, :delete_next]

  def index
    @search = current_user.task_templates.search(params[:search])
    @task_templates = @search.order('task_templates.created_at desc').page(params[:page])
  end

  def new
    @task_template = TaskTemplate.new
    render layout: 'application_pop'
  end

  def create
    @task_template = current_user.task_templates.new(params[:task_template])

    if @task_template.task_type1?
      return redirect_to :back, alert: '请设置任务执行周期每天类型日期排班' if params[:week_items].blank?

      @task_template.week_items = params[:week_items].join(',')

      if @task_template.day_type1?
        @task_template.task_times = 1
        # @task_template.week_items = ''
        @task_template.hour_items = ''
      else
        return redirect_to :back, alert: '请设置任务执行周期每天类型时间点排班' if params[:hour_items].blank?
        @task_template.task_times = params[:hour_items].size
        @task_template.hour_items = params[:hour_items].join(',')
      end
    end

    if @task_template.save
      flash[:notice] = "创建成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      redirect_to :back, alert: '创建失败'
    end
  end

  def edit
    render layout: 'application_pop'
  end

  def update
    if @task_template.update_attributes(params[:task_template])
      if @task_template.task_type1?
        return redirect_to :back, alert: '请设置任务执行周期每天类型日期排班' if params[:week_items].blank?

        @task_template.week_items = params[:week_items].join(',')

        if @task_template.day_type1?
          @task_template.task_times = 1
          @task_template.hour_items = ''
        else
          return redirect_to :back, alert: '请设置任务执行周期每天类型时间点排班' if params[:hour_items].blank?
          @task_template.task_times = params[:hour_items].size
          @task_template.hour_items = params[:hour_items].join(',')
        end
        @task_template.save
      end

      flash[:notice] = "更新成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      redirect_to :back, alert: '更新失败'
    end
  end

  def destroy
    if @task_template.tasks.count > 0
      redirect_to :back, alert: '已经被使用，不能删除'
    elsif @task_template.destroy
      redirect_to :back, notice: '删除成功'
    else
      redirect_to :back, alert: '删除失败'
    end
  end

  def delete_current
    if @task_template.delete_current_cycle_tasks
      redirect_to :back, notice: '操作成功'
    else
      redirect_to :back, alert: '操作失败'
    end
  end

  def delete_next
    if @task_template.delete_next_cycle_tasks
      redirect_to :back, notice: '操作成功'
    else
      redirect_to :back, alert: '操作失败'
    end
  end

  def copy
    TaskTemplate.transaction do
      ##新建任务模版
      task_template = TaskTemplate.create!(
        name: "#{@task_template.name}-副本",
        task_category_id: @task_template.task_category_id,
        task_level_id: @task_template.task_level_id,
        department_id: @task_template.department_id,
        user_id: @task_template.user_id,
        prev_task_template_id: @task_template.prev_task_template_id,
        prev_interval: @task_template.prev_interval,
        is_force_order: @task_template.is_force_order,
        position: @task_template.position,
        status: @task_template.status,
        description: @task_template.description,
        task_type: @task_template.task_type,
        task_times: @task_template.task_times,
        week_items: @task_template.week_items,
        day_type: @task_template.day_type,
        hour_items: @task_template.hour_items
      )

      ##新建检查项
      @task_template.task_template_items.each do |m|
        TaskTemplateItem.create!(
          task_template_id: task_template.id,
          name: m.name,
          position: m.position,
          description: m.description,
          status: m.status
        )
      end
      redirect_to :back, notice: '复制成功'
    end
  rescue => e
    # Rails.logger.info "***************#{e}"
    redirect_to :back, alert: '复制失败'
  end

  def change
    respond_to do |format|
      if params[:type].present? && params[:task_template_id].present?
        if params[:type].to_i == 0
          TaskTemplate.find(params[:task_template_id].to_i).no!
        else
          TaskTemplate.find(params[:task_template_id].to_i).yes!
        end
        format.json {render json: {code: 200}}
      else
        format.json {render json: {code: -1}}
      end
    end
  end

  def on
    if @task_template.on!
      redirect_to :back, notice: '启用成功!'
    else
      redirect_to :back, alert: '启用失败!'
    end
  end

  def off
    if @task_template.off!
      redirect_to :back, notice: '禁用成功!'
    else
      redirect_to :back, alert: '禁用失败!'
    end
  end

  def qrcode
    render layout: 'application_pop'
  end

  def download
    # send_data @task_template.download, :disposition => 'attachment', :filename=>"任务模板二维码-#{@task_template.name}-#{@task_template.id}.png"
    send_file ("#{Rails.root}/public/qrcode/task_templates/#{@task_template.id}.png")
  end

  private

  def find_task_template
    @task_template = TaskTemplate.find(params[:id])
  end
end