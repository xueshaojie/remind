class Admin::AuctionProductsController < Admin::BaseController

  before_filter :find_product, only: [:show, :edit, :update]
  
  def index
    @search = AuctionProduct.search(params[:search])
    @prodcts = @search.includes(:auction_user).page(params[:page])
  end

  def product
    @search = AuctionProduct.product.search(params[:search])
    @prodcts = @search.includes(:auction_user).page(params[:page])
  end

  def show
  end

  def edit
  end

  def update
  end

  private
    def find_product
      @product = AuctionProduct.find(params[:id].to_i)
    end

end