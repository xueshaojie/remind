class Wap::ProductsController < Wap::BaseController
  before_filter :find_product, only: [:show, :edit, :update, :success, :set_qty, :change_qty]

  def index
    @products = @user.shop.products
  end

  def new
    @product = @user.shop.products.new
  end

  def create
    @product = @user.shop.products.new(params[:product].merge(create_shop_user_id: @user.id))
    if @product.save
      redirect_to success_wap_product_path(@product)
    else
      render 'new'
    end
  end

  def update
    if @product.update_attributes(params[:product])
      redirect_to wap_product_path(@product)
    else
      render 'edit'
    end
  end

  def change_qty
    if @product.change_qty!(params[:product])
      redirect_to wap_product_path(@product)
    else
      render 'set_qty'
    end
  end

  private

    def find_product
      @product = @user.shop.products.where(id: params[:id]).first
    end
end
