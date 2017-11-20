class Admin::BrandCategoryMapsController < Admin::BaseController
  before_filter :find_brand_category_map, only: [:show, :update, :destroy]
  def index
    @search =  BrandCategoryMap.search(params[:search])
    @brand_category_maps = @search.order(:created_at).page(params[:page])
  end

  def show
    render layout: 'application_pop'
  end

  def new
    @brand_category_map = BrandCategoryMap.new(params[:brand_category_map])
    render layout: 'application_pop'
  end

  def create
    @brand_category_map = BrandCategoryMap.new(params[:brand_category_map])
    if @brand_category_map.save
      flash[:notice] = '保存成功'
      render inline: '<script>parent.location.reload();</script>'
    else
      return redirect_to :back, alert:'保存失败，请确认数据正确和必填项'
    end
  end

  def update
    if @brand_category_map.update_attributes(params[:brand_category_map])
      flash[:notice] = '更新成功'
      render inline: '<script>parent.location.reload();</script>'
    else
      return redirect_to :back, alert:'更新失败，请确认数据正确和必填项'
    end
  end

  def destroy
    if  @brand_category_map.destroy
      redirect_to :back, notice:'删除成功'
    else
      redirect_to :back, alert:'删除失败'
    end
  end

  # def frost
  #   if @brand_category_map.frost!
  #     redirect_to :back, notice: '删除成功'
  #   else
  #     redirect_to :back, notice: '删除失败'
  #   end
  # end

    private

    def find_brand_category_map
      @brand_category_map = BrandCategoryMap.find(params[:id])
    end

end