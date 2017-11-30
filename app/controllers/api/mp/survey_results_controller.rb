class Api::Mp::SurveyResultsController < Api::Mp::BaseController

  def index
    @results = @current_wx_user.survey_results.where(survey_type: params[:survey_type])
    respond_to :json
  end

  def new
    @surveys = Survey.normal.energy
    respond_to :json
  end

  def create
    @survey = @current_wx_user.survey_results.new(params[:survey_result])
    if @survey.energy?
      times = params[:result].size
      score = 0
      times.times.each do |i|
        return_result = get_result(params[:result]["#{i}"]["id"], params[:result]["#{i}"]["score"])
        @survey.result.push(return_result)
        score = score.to_i + return_result[1].to_i
      end
      total = Survey.normal.sum(:total_score)
      @survey.score = ((score/total).round(2) * 100).to_i
    elsif @survey.effect?
      score = ((@survey.exposure/40 + 2 * @survey.interaction + 10 * sales_volume + 18 * @survey.precipitate_fans)/ @survey.implementation_costs).round(2)
      get_point = (score/2).round(2) > 1.00 ? 1 : (score/2).round(2)
      @survey.score = (get_point * 100).to_i
    elsif @survey.income?
      score = @survey.sales_volume * 1.1 + @survey.exposure/40 + 2 * @survey.interaction + 18 * @survey.precipitate_fans
      @survey.score = score.to_i
    end

    if @survey.save
      render json: {code: 1, errormsg: "ok", score: @survey.score}
    else
      render json: {code: 0, errormsg: @survey.errors.messages}
    end
  end

  def destroy
    @survey = @current_wx_user.survey_results.find(params[:id].to_i)
    if @survey.destroy
      render json: {code: 1, errormsg: "ok"}
    else
      render json: {code: 0, errormsg: "删除失败"}
    end
  end

  def get_info
    @results = @current_wx_user.survey_results
    render json: {code: 1, errormsg: "ok", precipitate_fans: @result.sum(:precipitate_fans), sales_volume: @result.sum(:sales_volume), interaction:  @result.sum(:interaction)}
  end

  private

    def get_result(id, score)
      survey = Survey.find(id.to_i)
      return ["", 0] unless survey
      return [survey.name, score.to_i] if score.to_i <= survey.total_score
      [survey.name, survey.total_score]
    end




end