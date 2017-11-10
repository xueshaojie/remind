class Admin::PlantAssetsController < Admin::BaseController

  before_filter :find_plant_asset, only: [:edit, :show, :update, :destroy, :receive, :deal, :record, :handle, :qrcode, :download]

  def index
    @search = PlantAsset.normal.search(params[:search])
    @plant_assets = @search.order("plant_assets.no desc").page(params[:page])
    respond_to :html, :xls
  end

  def show
    render layout: 'application_pop'
  end

  def new
    @plant_asset = PlantAsset.new
    render layout: 'application_pop'
  end

  def create
    @plant_asset = PlantAsset.new(params[:plant_asset])
    if @plant_asset.save!
      flash[:notice] = "保存成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      return redirect_to :back, alert: '保存失败，请确认数据正确和必填项。'
    end
  end

  def edit
    render layout: 'application_pop'
  end

  def update
    if @plant_asset.update_attributes(params[:plant_asset])
      flash[:notice] = "更新成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      redirect_to :back, alert: '更新失败'
    end
  end

  def destroy
    if @plant_asset.disabled!
      redirect_to :back, notice: '删除成功'
    else
      redirect_to :back, alert: '删除失败'
    end
  end

  ## 资产设备导入
  def import
    temp_file = TempFile.new
    temp_file.url = params[:file]
    if temp_file.save && PlantAsset.import(temp_file.url)
      temp_file.destroy
      redirect_to :back, notice: "导入成功"
    else
      redirect_to :back, alert: '导入失败,请核对excel数据是否正确'
    end
  end

  def receive
    @plant_usage_record = PlantUsageRecord.new
    render layout: 'application_pop'
  end

  def deal
     @plant_usage_record = PlantUsageRecord.new(params[:plant_usage_record].merge(plant_asset_id: @plant_asset.id, status: -1))
    if @plant_usage_record.save && @plant_asset.status2!
      # @plant_asset.update_attributes(department_id: @plant_usage_record.department_id)
      flash[:notice] = '领用成功'
      render inline: "<script>parent.location.reload();</script>"
    else
      redirect_to :back, alert: '领用失败'
    end
  end

  def record
    @receive_plant_usage_record = PlantUsageRecord.where(id: params[:plant_usage_record_id]).first
    @plant_usage_record = PlantUsageRecord.new(department_id: @receive_plant_usage_record.try(:department_id) || @plant_asset.department_id)
    render layout: 'application_pop'
  end

  def handle
    @receive_plant_usage_record = PlantUsageRecord.where(id: params[:receive_plant_usage_record_id]).first
    @plant_asset.status1!
    @plant_usage_record = @plant_asset.plant_usage_records.build(department_id: @receive_plant_usage_record.try(:department_id) || @plant_asset.department_id, description: params[:description])
    if @plant_usage_record.save
      # @plant_asset.update_attributes(department_id: nil)
      flash[:notice] = '归还成功'
      render inline: "<script>parent.location.reload();</script>"
    else
      redirect_to :back, alert: '归还失败'
    end
  end

  def qrcode
    render layout: 'application_pop'
  end

  def download
    # send_data @plant_asset.download, :disposition => 'attachment', :filename=>"资产二维码-#{@plant_asset.name}-#{@plant_asset.no}.png"
    send_file ("#{Rails.root}/public/qrcode/plant_assets/#{@plant_asset.id}.png")
  end

  private
  def find_plant_asset
    @plant_asset = PlantAsset.find(params[:id])
  end
end