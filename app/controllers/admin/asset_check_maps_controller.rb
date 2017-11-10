class Admin::AssetCheckMapsController < Admin::BaseController

  def index
    @asset_check = AssetCheck.find(params[:id])
    if params[:type].to_i == 1
      @search = @asset_check.asset_check_maps.type1.search(params[:search])
    elsif params[:type].to_i == 2
      @search = @asset_check.asset_check_maps.checked.search(params[:search])
    elsif params[:type].to_i == 3
      @search = @asset_check.asset_check_maps.type3.search(params[:search])
    else
      @search = @asset_check.asset_check_maps.search(params[:search])
    end
    @type = params[:type].to_i
    @asset_check_maps = @search.page(params[:page])
  end

end