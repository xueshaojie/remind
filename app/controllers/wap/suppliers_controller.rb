class Wap::SuppliersController < Wap::BaseController
  before_filter :find_supplier, only: [:show, :edit, :update, :destroy]
  def index
    @suppliers = @user.shop.suppliers
  end

  def new
    @supplier = @user.shop.suppliers.new
  end

  def create
    @supplier = @user.shop.suppliers.new(params[:supplier])
    if @supplier.save
      redirect_to wap_suppliers_path
    else
      render 'new'
    end
  end

  private

    def find_shop_customer
      @supplier = @user.shop.suppliers.where(id: params[:id]).first
    end
end
