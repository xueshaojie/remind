class Admin::ProductCategoriesController < Admin::BaseController
  before_filter :find_product_category, only: [:frost, :show, :edit, :update, :destroy]
  def index
    @search = ProductCategory.normal.search(params[:search])
    @product_categories = @search.order(:position).page(params[:page])
  end

  def show
    render layout: 'application_pop'
  end

  def new
    @product_category = ProductCategory.new(params[:product_category])
    render layout: 'application_pop'
  end

  def create
    @product_category = ProductCategory.new(params[:product_category])
    if @product_category.save
      flash[:notice] = '保存成功'
      render inline: '<script>parent.location.reload();</script>'
    else
      return redirect_to :back, alert:'保存失败，请确认数据正确和必填项'
    end
  end

  def update
    if @product_category.update_attributes(params[:product_category])
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
    if @product_category.frost!
      redirect_to :back, notice: '删除成功'
    else
      redirect_to :back, notice: '删除失败'
    end
  end

    private

    def find_product_category
      @product_category = ProductCategory.find(params[:id])
    end

end