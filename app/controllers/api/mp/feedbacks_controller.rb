class Api::Mp::FeedbacksController < Api::Mp::BaseController

  def create
    @feedback = @current_wx_user.feedbacks.new(params[:feedback])
    if @feedback.save
      render json: {code: 1, errormsg: "ok"}
    else
      render json: {code: 0, errormsg: "#{@feedback.errors.messages}"}
    end

  end

  def destroy
    @feedback = @current_wx_user.feedbacks.find(params[:id].to_i) rescue nil
    if @feedback.destroy
      render json: {code: 1, errormsg: "ok"}
    else
      render json: {code: 0, errormsg: "#{@feedback.errors.messages}"}
    end
  end

end
