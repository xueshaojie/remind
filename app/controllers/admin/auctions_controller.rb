class Admin::AuctionsController < Admin::BaseController

  before_filter :find_product, only: [:show, :update]
  before_filter :set_params, only: [:index, :product]
  
  def index
    @search = Auction.search(params[:search])
    @products = @search.page(params[:page])
  end

  def product
    @search = Auction.product.search(params[:search])
    @products = @search.page(params[:page])
  end

  def show
    render layout: 'application_pop'
  end

  def update
    if @product.update_column(:status, params[:status].to_i)
      redirect_to :back, notice: "验证成功"
    else
      redirect_to :back, alert: "验证失败"
    end
  end

  private
    def find_product
      @product = Auction.find(params[:id].to_i)
    end

    def set_params
      params[:search] ||= {}
      params[:search][:created_at_gte], params[:search][:created_at_lte] = params[:search].delete(:created_at_between).split(' - ') if params[:search][:created_at_between]
    end

end