class Api::Mp::CurrenciesController < Api::Mp::BaseController
  skip_before_filter :set_wx_user

  def index
    @currencies = Currency.normal.limit(100).page(params[:page])
    @page = Currency.normal.size % 10 == 0? Currency.normal.size/10 : Currency.normal.size/10 + 1
    respond_to :json
  end

  def search
    return render json: {currencies: []} if params[:symbol].blank?
    @currencies = Currency.normal.where("symbol like ?", "%#{params[:symbol]}%")
    respond_to :json
  end

end
