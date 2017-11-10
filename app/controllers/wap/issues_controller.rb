class Wap::IssuesController < Wap::BaseController

  def index
    @issues = current_user.issues
    @solve_issues = current_user.slove_issues
  end

  def my
    conds = params[:status].blank? ? {} : { status: params[:status].to_i }
    @issues = current_user.issues.where(conds)

    @today_issues = @issues.where("DATE(created_at) = ?", Date.today).order('issues.created_at desc')
    @yesterday_issues = @issues.where("DATE(created_at) = ?", Date.today.yesterday).order('issues.created_at desc')
#   day_issues = @issues.where("DATE(created_at) <=?", Date.today.yesterday.yesterday).order('issues.created_at desc')

    params[:ajaxdata] ||= {}
    @day_issues = @issues.where("DATE(created_at) <= ?", Date.today.yesterday.yesterday).order('issues.created_at desc').page(params[:ajaxdata][:page]).per(params[:ajaxdata][:pagesize])

    data = []
    @day_issues.each do |day_issue|
      data << {id: day_issue.id, title: day_issue.title, level: day_issue.level_name,
       category: day_issue.category, user: day_issue.user.name, time: day_issue.created_at.to_s,
       status: day_issue.status_name
      }
    end
    respond_to do |format|
      format.html
      format.json { render json: {data: data, code: 1} }
    end

  end

  def pending
    @today_solve_issues = current_user.pending_solve_issues.order('issues.created_at desc').where("DATE(issues.created_at) = ?", Date.today).order('issues.created_at desc')
    @yesterday_solve_issues = current_user.pending_solve_issues.where("DATE(created_at) = ?", Date.today.yesterday).order('issues.created_at desc')
    # @day_solve_issues = current_user.pending_solve_issues.where("DATE(created_at) <= ?", Date.today.yesterday.yesterday).order('issues.created_at desc')

    params[:ajaxdata] ||= {}
    @day_solve_issues = current_user.pending_solve_issues.where("DATE(created_at) <= ?", Date.today.yesterday.yesterday).order('issues.created_at desc').page(params[:ajaxdata][:page]).per(params[:ajaxdata][:pagesize])

    data = []
    @day_solve_issues.each do |day_solve_issue|
      data << {id: day_solve_issue.id, title: day_solve_issue.title, level: day_solve_issue.level_name,
       category: day_solve_issue.category, user: day_solve_issue.user.name, time: day_solve_issue.created_at.to_s
      }
    end
    respond_to do |format|
      format.html
      format.json { render json: {data: data, code: 1} }
    end
  end

  def list
    @solve_issues = current_user.slove_issues
    if params[:level].to_i > 0
      @solve_issues = @solve_issues.claim.where(level: params[:level].to_i)
    end
    if params[:status].to_i > 0
      @solve_issues = @solve_issues.where(status: params[:status].to_i)
    end

    @today_solve_issues = @solve_issues.where("DATE(issues.created_at) = ?", Date.today).order('issues.created_at desc')
    @yesterday_solve_issues = @solve_issues.where("DATE(issues.created_at) = ?", Date.today.yesterday).order('issues.created_at desc')
   # @day_solve_issues = @solve_issues.where("DATE(issues.created_at) <= ?", Date.today.yesterday.yesterday).order('issues.created_at desc')

    params[:ajaxdata] ||= {}
    @day_solve_issues = @solve_issues.where("DATE(issues.created_at) <= ?", Date.today.yesterday.yesterday).order('issues.created_at desc').page(params[:ajaxdata][:page]).per(params[:ajaxdata][:pagesize])

    data = []
    @day_solve_issues.each do |day_solve_issue|
      data << {id: day_solve_issue.id, title: day_solve_issue.title, level: day_solve_issue.level_name,
       category: day_solve_issue.category, user: day_solve_issue.user.name, time: day_solve_issue.created_at.to_s,
       status:day_solve_issue.status_name
      }
    end
    respond_to do |format|
      format.html
      format.json { render json: {data: data, code: 1} }
    end

  end


  # 问题状态判断：未认领（修改分类、更新认领状态）、已认领（修改等级、更新处理状态）
  def show
    @issue = Issue.find(params[:id].to_i)
  end

  def detail
    @issue = Issue.find(params[:id].to_i)
  end

  def new
    @issue = current_user.issues.new
  end

  def create
    @issue = current_user.issues.new(params[:issue])
    if @issue.save
      redirect_to wap_issues_path
    else
      render 'new'
    end
  end

  def update
    @issue = Issue.find(params[:id].to_i)
    if @issue.update_attributes(params[:issue])
      render json: { code: 1 }
    else
      render json: { code: 0 }
    end
  end

  def claim
    @issue = Issue.find(params[:id].to_i)
    if @issue.claim!
      render json: { code: 1 }
    else
      render json: { code: 0 }
    end
  end

end