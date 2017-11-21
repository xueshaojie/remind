class Wap::WarehouseCheckItemsController < Wap::BaseController
  before_filter :find_warehouse_check_item
  def check
  end

  def confirm
    if @warehouse_check_item.check!(params[:real_qty])
      redirect_to success_wap_warehouse_check_item_path(@warehouse_check_item)
    else
      render 'check'
    end
  end

  private

    def find_warehouse_check_item
      @warehouse_check_item = WarehouseCheckItem.where(id: params[:id]).first
    end
end
