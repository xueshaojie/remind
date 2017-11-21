class Wap::WarehouseChecksController < Wap::BaseController
  before_filter :find_warehouse_check, only: [:show, :finish]

  def index
    @warehouse_checks = @user.warehouse_checks
  end

  def new
    @warehouse_check = @user.shop.warehouse_checks.new
  end

  def create
    @warehouse_check = @user.shop.warehouse_checks.new(params[:warehouse_check].merge(shop_user_id: @user.id))
    if @warehouse_check.save
      redirect_to wap_warehouse_check_path(@warehouse_check)
    else
      render 'new'
    end
  end

  def finish
    @warehouse_check.finished!
    redirect_to wap_warehouse_checks_path
  end

  private

    def find_warehouse_check
      @warehouse_check = @user.shop.warehouse_checks.where(id: params[:id]).first
    end
end
