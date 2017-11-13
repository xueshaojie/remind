class Admin::BrandsController < Admin::BaseController
  before_filter :find_brand, only: [:frost]
  def index
    @search =  Brand.normal.search(params[:search])
    @brands = @search.order(:position).page(params[:page])
  end

  def show
    @brand = Brand.find(params[:id])
    render layout: 'application_pop'
  end

  def new
    @brand = Brand.new(params[:brand])
    render layout: 'application_pop'
  end

  def create
    @brand = Brand.new(params[:brand])
    if @brand.save
      flash[:notice] = '保存成功'
      render inline: '<script>parent.location.reload();</script>'
    else
      return redirect_to :back, alert:'保存失败，请确认数据正确和必填项'
    end
  end

  def update
    @brand = Brand.find(params[:id])
    if @brand.update_attributes(params[:brand])
      flash[:notice] = '更新成功'
      render inline: '<script>parent.location.reload();</script>'
    else
      return redirect_to :back, alert:'更新失败，请确认数据正确和必填项'
    end
  end

  # def destroy
  #   @product_category = ProductCategory.find(params[:id])
  #   if @product_category.task_templates.count > 0
  #     return redirect_to :back,alert:'该类型下，有相应的任务模版，不能删除!'
  #   elsif @product_category.destroy
  #     redirect_to :back, notice:'删除成功'
  #   else
  #     redirect_to :back, alert:'删除失败'
  #   end
  # end

  def frost
    if @brand.frost!
      redirect_to :back, notice: '删除成功'
    else
      redirect_to :back, notice: '删除失败'
    end
  end

    private

    def find_brand
      @brand = Brand.find(params[:id])
    end

end