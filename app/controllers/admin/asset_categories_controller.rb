class Admin::AssetCategoriesController < Admin::BaseController

before_filter :find_assetcategory, only:[:show, :update, :destory]

  def index
    @search = AssetCategory.normal.search(params[:search])
    @asset_categories = @search.order("created_at desc").page(params[:page])
  end
  
  def show
    render layout: 'application_pop'
  end

  def new
    @asset_category = AssetCategory.new
    render layout: 'application_pop'
  end

  def create
    @assetcategory = AssetCategory.new(params[:asset_category])
    if @assetcategory.save!
      flash[:notice] = "保存成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      return redirect_to :back, alert: '保存失败，请确认数据正确和必填项。'
    end
  end

  def update
    if @asset_category.update_attributes(params[:asset_category])
      flash[:notice] = "更新成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      return redirect_to :back, alert: '更新失败，请确认数据正确和必填项。'
    end
  end

  def destroy
    @assetcategory = AssetCategory.find(params[:id])
    if @assetcategory.disabled!
      redirect_to :back, notice: '删除成功'
    else
      redirect_to :back, alert: '删除失败'
    end
  end

  private 
  def find_assetcategory
    @asset_category = AssetCategory.find(params[:id])
  end

end