class Wap::ProductsController < ApplicationController
  before_filter :find_product, only: [:show]

  def index
    @products = @user.shop.products
  end

  def show
  end

  private

    def find_product
      @product = @user.shop.products.where(id: params[:id]).first
    end
end
