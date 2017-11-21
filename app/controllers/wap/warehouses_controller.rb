class Wap::WarehousesController < Wap::BaseController
  before_filter :find_warehouse, only: [:show, :edit, :update, :destroy, :freeze]
  def index
    @warehouses = @user.shop.warehouses
  end

  def new
    @warehouse = @user.shop.warehouses.new
  end

  def create
    @warehouse = @user.shop.warehouses.new(params[:warehouse])
    if @warehouse.save
      redirect_to wap_warehouses_path
    else
      render 'new'
    end
  end

  def destroy
    if @warehouse.products.count > 1
      redirect_to wap_warehouse_path(@warehouse)
    else
      @warehouse.destroy
      redirect_to wap_warehouses_path
    end
  end

  def freeze
    if @warehouse.frost!
      redirect_to wap_warehouses_path(@warehouse)
    else
      redirect_to wap_warehouses_path(@warehouse)
    end
  end

  private

    def find_warehouse
      @warehouse = @user.shop.warehouses.where(id: params[:id]).first
    end
end
