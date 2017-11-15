class Wap::ProductsController < Wap::BaseController
  before_filter :find_product, only: [:show, :edit, :update]

  def index
    @products = @user.shop.products
  end

  def update
    if @product.update_attributes(params[:product])
      redirect_to wap_product_path(@product)
    else
      render 'edit'
    end
  end

  private

    def find_product
      @product = @user.shop.products.where(id: params[:id]).first
    end
end
