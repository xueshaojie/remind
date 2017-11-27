class Api::Mp::AuctionsController < Api::Mp::BaseController
  
  before_filter :find_auction, only: [:show, :update]
  def index
    @auctions = params[:status] == "All" ? @current_wx_user.auctions : @current_wx_user.auctions.send(params[:status])
    respond_to :json
  end

  def create
    @auction = @current_wx_user.auctions.new(params[:auction])
    if @auction.save
      render json: {code: 1, errormsg: "ok"}
    else
      render json: {code: 0, errormsg: "#{@auction.errors.messages}"}
    end

  end

  def show
    respond_to :json
  end

  def update
    return render json: {code: 1, errormsg: "ok"}
    params[:status] == "true" ? @auction.auction_pass! : @auction.auction_refuse!
    render json: {code: 1, errormsg: "ok"}
  end

  private

    def find_auction
      @auction = @current_wx_user.auctions.find(params[:id].to_i) rescue nil
      return render json: {code: -1, errormsg: "暂未发现此拍品"} unless @auction
    end

end