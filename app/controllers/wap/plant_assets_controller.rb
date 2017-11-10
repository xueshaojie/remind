class Wap::PlantAssetsController < Wap::BaseController

  def index
    params[:ajaxdata] ||= {}
    conds = params[:q].blank? ? {} : ['plant_assets.name like ?', "%#{params[:q]}%"]
    @plant_assets = @user.department.plant_assets.where(conds).page(params[:ajaxdata][:page]).per(params[:ajaxdata][:pagesize])

    respond_to do |format|
      format.html
      format.json {
        data = []
        @plant_assets.each do |plant_asset|
          data << {id:plant_asset.id, no: plant_asset.no, fn:plant_asset.try(:name),
            sc:plant_asset.try(:scale).to_s,de:plant_asset.department.try(:name).to_s }
        end

        render json: {data: data, code: 1}
      }
    end
  end

  def show
    @plant_asset = PlantAsset.where(no: params[:id]).first
    @last_asset_check_map = @plant_asset.asset_check_maps.order(:created_at).last
  end

end