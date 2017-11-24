class Api::Mp::WxUsersController < Api::Mp::BaseController

  def create
	return render json: {openid: WxUser.first.openid}
  end
end