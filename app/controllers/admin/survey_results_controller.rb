class Admin::SurveyResultsController < Admin::BaseController

  before_filter :find_survey_result, only: [:show]

  def index
    params[:search] ||= {}
    params[:search][:created_at_gte], params[:search][:created_at_lte] = params[:search].delete(:created_at_between).split(' - ') if params[:search][:created_at_between]

  	@search = SurveyResult.normal.search(params[:search])
  	@survey_results = @search.page(params[:page])
  end

  def show
    @result = SurveyResult.normal.find(params[:id])
    render layout: 'application_pop'
  end

  private
    def find_survey_result
      @survey_result = SurveyResult.normal.find(params[:id].to_i)
    end

end
