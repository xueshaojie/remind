class Admin::ArchiveCategoriesController < Admin::BaseController
  before_filter :find_archive_category, only:[:show, :update, :destory]

  def index
    @categories = ArchiveCategory.order(:parent_id)
    @search = @categories.search(params[:search])
    # conds = {}
    if params[:category_id].present?
      @category = @categories.where(id: params[:category_id]).first
      # conds = { parent_id: params[:category_id] }
      @categories = @category.self_and_descendants
      @archive_categories = Kaminari.paginate_array(@category.self_and_descendants).page(params[:page])
    else
      @archive_categories = @search.order(:parent_id).page(params[:page])
    end
  end

  def show
    render layout: 'application_pop'
  end

  def new
    @archive_category = ArchiveCategory.new
    render layout: 'application_pop'
  end

  def create
    @archive_category = ArchiveCategory.new(params[:archive_category])
    if @archive_category.save
      flash[:notice] = "保存成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      return redirect_to :back, alert: '保存失败，请确认数据正确和必填项。'
    end
  end

  def update
    if @archive_category.update_attributes(params[:archive_category])
      flash[:notice] = "更新成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      return redirect_to :back, alert: '更新失败，请确认数据正确和必填项。'
    end
  end

  def destroy
    @archive_category = ArchiveCategory.find(params[:id])
    if @archive_category.archives.count > 0 && @archive_category.children.count > 0
      redirect_to :back, alert: '分类下面有子分类或已经被使用，不能删除'
    elsif @archive_category.destroy
      redirect_to :back, notice: '删除成功'
    else
      redirect_to :back, alert: '删除失败'
    end
  end

  private 
  def find_archive_category
    @archive_category = ArchiveCategory.find(params[:id])
  end

end