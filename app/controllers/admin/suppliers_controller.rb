class Admin::SuppliersController < Admin::BaseController
  before_filter :find_supplier, only:[:show, :update, :destroy]

  def  index
    @search = Supplier.normal.search(params[:search])
    @suppliers = @search.order("created_at desc ").page(params[:page])
  end

  def show
    render layout: 'application_pop'
  end

  def new
    @supplier = Supplier.new(params[:supplier])
    render layout: 'application_pop'  
  end

  def create
    @supplier = Supplier.new(params[:supplier])
    if @supplier.save
      flash[:notice] = "保存成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      return redirect_to :back, alert: '保存失败，请确认数据正确和必填项。'
    end
  end

  def update
    if @supplier.update_attributes(params[:supplier])
      flash[:notice] = "更新成功"
      render inline: "<script>parent.location.reload();</script>"
    else
      return redirect_to :back, alert: '更新失败，请确认数据正确和必填项。'
    end
  end

  def destroy
    @supplier = Supplier.find(params[:id])
    if @supplier.disabled!
      redirect_to :back, notice: '删除成功'
    else
      redirect_to :back, alert: '删除失败'
    end
  end

  private 
  def find_supplier
    @supplier = Supplier.find(params[:id])
  end

end
