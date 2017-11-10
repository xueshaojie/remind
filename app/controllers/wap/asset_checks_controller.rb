class Wap::AssetChecksController < Wap::BaseController

  before_filter :find_asset_check, only: [:show, :scan, :check, :done, :asset_check_map]

  def index
    @asset_checks = current_user.asset_checks.order("asset_checks.created_at desc")
  end

  def show
    @asset_check.start if @asset_check.pending?

    params[:ajaxdata] ||= {}
    @asset_check_maps = @asset_check.asset_check_maps.checked.page(params[:ajaxdata][:page]).per(params[:ajaxdata][:pagesize])

    data = []
    @asset_check_maps.each do |asset_check_map|
      data << {id:asset_check_map.id, no: asset_check_map.plant_asset.no, fn:asset_check_map.plant_asset.try(:name),
        sc:asset_check_map.plant_asset.try(:scale),de:@asset_check.department.name }
    end
    respond_to do |format|
      format.html
      format.json { render json: {data: data, code: 1} }
    end
  end

  def new
    @asset_check = current_user.department.asset_checks.new
  end

  def create
    @asset_check = current_user.asset_checks.new(params[:asset_check])
    if @asset_check.save
      redirect_to wap_asset_check_path(@asset_check)
    else
      render 'new'
    end
  end

  def scan
    @plant_asset = PlantAsset.where(no: params[:aid]).first
    return render text: '资产不存在' unless @plant_asset

    @last_asset_check_map = @plant_asset.asset_check_maps.order(:created_at).last
  end

  def check
    @asset_check_map = @asset_check.asset_check_maps.where(params[:asset_check_map].merge(user_id: current_user.id)).first_or_create
    @asset_check_map.check_type_id = @asset_check_map.department_id == current_user.department_id ? 1 : 2
    render json: {code: @asset_check_map.save ? 1 : 0}
  end

  def done
    render json: {code: @asset_check.done! ? 1 : 0}
  end

  def asset_check_map
    case params[:type]
    ##已盘
    when 'done' then
      @asset_check_maps = @asset_check.asset_check_maps.checked
      @asset_check_map_name = '已盘'
    ##盘盈
    when 'full' then
      @asset_check_maps = @asset_check.asset_check_maps.type2
      @asset_check_map_name = '盘盈'
    ##盘亏
    when 'lost' then
      @asset_check_maps = @asset_check.asset_check_maps.type3
      @asset_check_map_name = '盘亏'
    ##应盘
    else
      @asset_check_maps = @asset_check.asset_check_maps
      @asset_check_map_name = '应盘'
    end
  end

  private

  def find_asset_check
    @asset_check = current_user.asset_checks.find(params[:id])
  end

end
