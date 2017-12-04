class Api::Mp::FeedbacksController < Api::Mp::BaseController

  def create
    #接口传递参数  {"openid" => 'openid', "feedback" => {} }
    @feedback = @current_wx_user.feedbacks.new(params[:feedback])
    if @feedback.save
      render json: {errcode: 0, errmsg: "ok"}
    else
      render json: {errcode: 40001, errmsg: "#{@feedback.errors.messages}"}
    end
  end

  def destroy
    #接口传递参数  {"openid" => 'openid', "id" => 'id'}
    @feedback = @current_wx_user.feedbacks.find(params[:id].to_i) rescue nil
    if @feedback.destroy
      render json: {errcode: 0, errmsg: "ok"}
    else
      render json: {errcode: 40001, errmsg: "#{@feedback.errors.messages}"}
    end
  end

end
