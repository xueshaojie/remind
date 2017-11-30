class Admin::SurveysController < Admin::BaseController

  before_filter :find_survey, only: [:edit, :update, :destroy]
  
  def index
  	@search = Survey.normal.search(params[:search])
  	@surveys = @search.page(params[:page])
  end

  def show
  end

  def new
    @survey = Survey.new
    render layout: 'application_pop'
  end

  def create
    @survey = Survey.new(params[:survey])
    if @survey.save
      flash[:notice] = '创建成功'
      render inline: '<script>parent.location.reload();</script>'
    else
      redirect_to :back, alert: @survey.errors.messages
    end
  end

  def edit
    render layout: 'application_pop'
  end

  def update
    if @survey.update_attributes(params[:survey])
      flash[:notice] = '保存成功'
      render inline: '<script>parent.location.reload();</script>'
    else
      redirect_to :back, alert: @survey.errors.messages
    end
  end

  def destroy
    if @survey.deleted!
      redirect_to :back, notice: "删除成功"
    else
      redirect_to :back, alert: "删除失败"
    end
  end

  private
    def find_survey
      @survey = Survey.normal.find(params[:id].to_i)
    end

end
