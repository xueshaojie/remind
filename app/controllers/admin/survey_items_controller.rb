class Admin::SurveyItemsController < Admin::BaseController

  before_filter :find_survey
  before_filter :find_item, only: [:edit, :update, :destroy]
  
  def index
  	@search = @survey.survey_items.normal.search(params[:search])
  	@items = @search.page(params[:page])
  end

  def new
    @item = @survey.survey_items.new
    render layout: 'application_pop'
  end

  def create
    @item = @survey.survey_items.new(params[:survey_item])
    if @item.save
      flash[:notice] = '创建成功'
      render inline: '<script>parent.location.reload();</script>'
    else
      redirect_to :back, alert: @item.errors.messages
    end
  end

  def edit
    render layout: 'application_pop'
  end

  def update
    if @item.update_attributes(params[:survey_item])
      flash[:notice] = '保存成功'
      render inline: '<script>parent.location.reload();</script>'
    else
      redirect_to :back, alert: @item.errors.messages
    end
  end

  def destroy
    if @item.deleted!
      redirect_to :back, notice: "删除成功"
    else
      redirect_to :back, alert: "删除失败"
    end
  end

  private
    def find_survey
      @survey = Survey.normal.find(params[:survey_id].to_i)
    end

    def find_item
      @item = @survey.survey_items.normal.find(params[:id].to_i)
    end

end
