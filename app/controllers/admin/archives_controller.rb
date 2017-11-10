class Admin::ArchivesController < Admin::BaseController
  before_filter :find_archive, only: [:show, :update, :destroy]

  def index
    @search = Archive.search(params[:search])
    @archives = @search.page(params[:page])
  end

  def new
    @archive = Archive.new
    render layout: 'application_pop'
  end

  def create
    @archive = Archive.new(params[:archive])
    if @archive.save
      flash[:notice] = "保存成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      return redirect_to :back , alert: '保存失败'
    end
  end

  def show
    render layout: 'application_pop'
  end

  def update
    if @archive.update_attributes(params[:archive])
      flash[:notice] = "保存成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      redirect_to :back , alert: '保存失败'
    end
  end

  def destroy
    if @archive.destroy
      redirect_to :back, notice: "删除成功"
    else
      redirect_to :back, alert: "删除失败"
    end
  end

  def categories
    if params[:category_id].present?
      @categories = ArchiveCategory.where(parent_id: params[:category_id].to_i)
    else
      @categories = []
    end

    respond_to do |format|
      format.json {render json: @categories}
    end
  end

  private

    def find_archive
      @archive = Archive.find(params[:id])
    end
end
