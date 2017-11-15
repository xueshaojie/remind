class Wap::WarehousesController < Wap::BaseController
  before_filter :find_warehouse, only: [:show, :edit, :update, :destroy]
  def index
    @warehouses = @user.shop.warehouses
  end

  def new
    @warehouse = @user.shop.warehouses.new
  end

  def create
    @warehouse = @user.shop.warehouses.new(params[:warehouse])
    if @warehouse.save
      redirect_to wap_warehouse_path(@warehouse)
    else
      render 'new'
    end
  end

  private

    def find_shop_customer
      @warehouse = @user.shop.warehouses.where(id: params[:id]).first
    end
end
