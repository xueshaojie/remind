class Admin::TagsController < Admin::BaseController
  before_filter :find_tag, only: [:frost, :show, :update, :destroy]
  def index
    @search =  Tag.search(params[:search])
    @tags = @search.order(:position).page(params[:page])
  end

  def show
    render layout: 'application_pop'
  end

  def new
    @tag = Tag.new(params[:tag])
    render layout: 'application_pop'
  end

  def create
    @tag = Tag.new(params[:tag])
    if @tag.save
      flash[:notice] = '保存成功'
      render inline: '<script>parent.location.reload();</script>'
    else
      return redirect_to :back, alert:'保存失败，请确认数据正确和必填项'
    end
  end

  def update
    if @tag.update_attributes(params[:tag])
      flash[:notice] = '更新成功'
      render inline: '<script>parent.location.reload();</script>'
    else
      return redirect_to :back, alert:'更新失败，请确认数据正确和必填项'
    end
  end

  def destroy
    if @tag.destroy
      redirect_to :back, notice:'删除成功'
    else
      redirect_to :back, alert:'删除失败'
    end
  end

    private

    def find_tag
      @tag = Tag.normal.find(params[:id])
    end

end