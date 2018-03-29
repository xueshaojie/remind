class Api::Mp::NoticesController < Api::Mp::BaseController
  before_filter :find_notice, only: [:edit, :destroy, :cancel]

  def index
    #接口传递参数  {"openid" =>  'openid'}
    if params[:status].blank? || params[:status] == "undefined"
      @notices = @current_wx_user.notices.normal.page(params[:page]).order("created_at desc")
    else
      @notices = @current_wx_user.notices.where(status: params[:status]).page(params[:page]).order("created_at desc")
    end
    respond_to :json
  end

  def edit
    respond_to :json
  end

  def create
    #接口传递参数  {"openid" => 'openid'}
    if params[:notice][:id].blank?
      @notice = @current_wx_user.notices.new(params[:notice])
      @notice.form_id = params[:form_id]
      if @notice.save
        render json: {errcode: 1, errmsg: "ok"}
      else
        render json: {errcode: 40001, errmsg: "#{@notice.errors.messages}"}
      end
    else
      if @current_wx_user.notices.no_remind.where(id: params[:notice][:id]).first.update_attributes(range: params[:notice][:range])
        render json: {errcode: 0, errmsg: "ok"}
      else
        render json: {errcode: 40000, errmsg: "#{@notice.errors.messages}"}
      end
    end
  end

  def destroy
    #接口传递参数  {"openid" => 'openid', "id" => 'id'}
    if @notice.update_column(:status, 3)
      render json: {errcode: 0, errmsg: "ok"}
    else
      render json: {errcode: 40001, errmsg: "删除失败"}
    end
  end

  def cancel
    if @notice.update_column(:status, 2)
      render json: {errcode: 0, errmsg: "ok"}
    else
      render json: {errcode: 40001, errmsg: "取消失败"}
    end
  end

  private

    def find_notice
      @notice = @current_wx_user.notices.find(params[:id].to_i)
      render json: {errcode: 40001, errmsg: "没有找到提醒"} unless @notice
    end

end
