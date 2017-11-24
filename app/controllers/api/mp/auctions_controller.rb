class Api::Mp::AuctionsController < Api::Mp::BaseController
  

  def create
    @auction = @current_wx_user.auctions.new(params[:auction])
    if @auction.save
      render json: {code: 1, errormsg: "ok"}
    else
      render json: {code: 0, errormsg: "#{@auction.errors.messages}"}
    end

  end

  def show

  end

end