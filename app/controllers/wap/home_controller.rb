class Wap::HomeController < Wap::BaseController
  def index
    @today_tasks = @user.department.tasks.not_deleted.where("task_start_at >= ? and task_end_at <= ?", Time.now.strftime("%Y-%m-%d 00:00:00"), Time.now.strftime("%Y-%m-%d 23:59:59"))
    @today_issues = @user.pending_solve_issues.where("date(created_at) = ?", Date.today)
    @my_today_issues = @user.issues.where("date(created_at) = ?", Date.today)
    @issues = @user.pending_solve_issues
    @today_assets = @user.assets.where("date(created_at) = ?", Date.today)
    @today_visits = Visit.where("date(visit_date) = ?", Date.today)

    @yesterday_tasks = @user.department.tasks.not_deleted.where("task_start_at >= ? and task_end_at <= ?", Time.now.yesterday.strftime("%Y-%m-%d 00:00:00"), Time.now.yesterday.strftime("%Y-%m-%d 23:59:59"))
    @my_yesterday_issues = @user.issues.where("date(created_at) = ?", Date.today.yesterday)
    @yesterday_issues = @user.pending_solve_issues.where("date(created_at) = ?", Date.today.yesterday)
    @yesterday_assets = @user.assets.where("date(created_at) = ?", Date.today.yesterday)
    @yesterday_visits = @user.visits.where("date(created_at) = ?", Date.today.yesterday)

    @last_month_tasks = @user.department.tasks.not_deleted.where("task_start_at >= ? and task_end_at <= ?",30.days.ago.strftime("%Y-%m-%d 00:00:00"), Time.now.strftime("%Y-%m-%d 23:59:59"))
    @my_last_month_new_issues = @user.issues.where("created_at >= ?",30.days.ago.strftime("%Y-%m-%d 00:00:00"))

    if @user.admin?
      @sum_today_tasks = Task.where(department_id: @user.department.self_and_descendants.map(&:id).push(@user.department.id).compact).where("task_start_at >= ? and task_end_at <= ?", Time.now.strftime("%Y-%m-%d 00:00:00"), Time.now.strftime("%Y-%m-%d 23:59:59"))
      @sum_yesterday_tasks = Task.where(department_id: @user.department.self_and_descendants.map(&:id).push(@user.department.id).compact).where("task_start_at >= ? and task_end_at <= ?", Time.now.yesterday.strftime("%Y-%m-%d 00:00:00"), Time.now.yesterday.strftime("%Y-%m-%d 23:59:59"))
      @sum_today_issues = Issue.where(user_id: User.where(department_id: @user.department.self_and_descendants.map(&:id).push(@user.department.id).compact).pluck(:id)).where("created_at >= ?", Time.now.strftime("%Y-%m-%d 00:00:00"))
      @sum_yesterday_issues = Issue.where(user_id: User.where(department_id: @user.department.self_and_descendants.map(&:id).push(@user.department.id).compact).pluck(:id)).where("created_at >= ?", Time.now.yesterday.strftime("%Y-%m-%d 00:00:00"))
    elsif @user.leader?
      @sum_today_tasks = @today_tasks
      @sum_yesterday_tasks = @yesterday_tasks
      @sum_today_issues = Issue.where(user_id: @user.department.users.pluck(:id)).where("created_at >= ?", Time.now.strftime("%Y-%m-%d 00:00:00"))
      @sum_yesterday_issues = Issue.where(user_id: @user.department.users.pluck(:id)).where("created_at >= ?", Time.now.yesterday.strftime("%Y-%m-%d 00:00:00"))
    else
      @sum_today_tasks = @today_tasks
      @sum_yesterday_tasks = @yesterday_tasks
      @sum_today_issues = @my_today_issues
      @sum_yesterday_issues = @my_yesterday_issues
    end

    date = Date.today
    quarter = date.month < 4 ? 1 : (date.month < 7 ? 2 : (date.month < 10 ? 3 : 4))
    total_tasks = Task.pending.where(department_id: @user.department_id)
    @tasks1_count = total_tasks.not_deleted.task_type1.where("time_info like ?", "#{date.to_s}%").count
    @tasks2_count = total_tasks.not_deleted.task_type2.where(time_info: "#{date.year}年#{date.month}月").count
    @tasks3_count = total_tasks.not_deleted.task_type3.where(time_info: "#{date.year}年第#{quarter}季度").count
    @tasks4_count = total_tasks.not_deleted.task_type4.where(time_info: "#{date.year}#{date.month < 7 ? '上' : '下'}半年").count
    @tasks5_count = total_tasks.not_deleted.task_type5.where(time_info: "#{date.year}年").count
  end
end