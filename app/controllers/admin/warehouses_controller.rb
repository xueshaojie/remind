class Admin::WarehousesController < Admin::BaseController

  before_filter :find_warehouse, only: [:edit,:show, :update, :destroy]

  def index
    @search = Warehouse.normal.search(params[:search])
    @warehouses = @search.order("created_at desc").page(params[:page]) 
  end

  def show 
   render layout: 'application_pop'
 end

  def new
    @warehouse =Warehouse.new
    render layout: 'application_pop'
  end

  def create
    @warehouse = Warehouse.new(params[:warehouse])
    if @warehouse.save!
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
   if @warehouse.update_attributes(params[:warehouse])
     flash[:notice] = "更新成功"
     render inline: "<script>parent.location.reload();</script>"
   else
     return redirect_to :back, alert: '更新失败，请确认数据正确和必填项。'
   end
 end

  def destroy
   if @warehouse.disabled!
      redirect_to :back, notice: '删除成功'
    else
      redirect_to :back, alert: '删除失败'
    end
  end

  private 
  def find_warehouse 
    @warehouse = Warehouse.find(params[:id])
  end
end