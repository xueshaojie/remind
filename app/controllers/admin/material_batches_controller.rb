class Admin::MaterialBatchesController < Admin::BaseController

  before_filter :find_material_batch, only: [:deal, :edit, :update, :destroy]
  def index
    @search = MaterialBatch.search(params[:search])
    @material_batches = @search.order('time desc, no desc').page(params[:page])
  end

  def new
    @material_batch = MaterialBatch.new
    render layout: 'application_pop'
  end

  def create
    @material_batch = current_user.material_batches.build(params[:material_batch])
    if @material_batch.save
      flash[:notice] = '保存成功'
      render inline: "<script>parent.location.reload();</script>"
    else
      redirect_to :back, alert: '保存失败'
    end
  end

  def edit
    render layout: 'application_pop'
  end

  def update
    if @material_batch.update_attributes(params[:material_batch])
      flash[:notice] = '更新成功'
      render inline: "<script>parent.location.reload();</script>"
    else
      redirect_to :back, alert: '更新失败'
    end
  end

  def destroy
    if @material_batch.material_usage_records.count > 0
      return redirect_to :back, alert: '该物资批次已经被使用过，禁止删除'
    elsif @material_batch.destroy
      redirect_to :back, notice: '删除成功'
    else
      redirect_to :back, alert: '删除失败'
    end
  end

  def receive
    @material_batch = MaterialBatch.find(params[:id])
    @material_usage_record = MaterialUsageRecord.new(operate_type_id: params[:type])
    render layout: 'application_pop'
  end

  # def deal
  #   @material_batch = MaterialBatch.find(params[:id])
  #   if @material_batch.qty < params[:material_usage_record][:qty].to_i
  #     flash[:notice] = '库存数量不足'
  #     render inline: "<script>parent.location.reload();</script>"
  #   else
  #     @material_usage_record = MaterialUsageRecord.new(params[:material_usage_record].merge(material_batch_id: @material_batch.id, material_id: @material_batch.material_id, after_qty: @material_batch.qty - params[:material_usage_record][:qty].to_i))
  #     if @material_usage_record.save
  #       @material_batch.update_attributes(qty: @material_batch.qty - params[:material_usage_record][:qty].to_i)
  #       flash[:notice] = '领用成功'
  #       render inline: "<script>parent.location.reload();</script>"
  #     else
  #       redirect_to :back, alert: '领用失败'
  #     end
  #   end
  # end
  def deal
    @material_batch = MaterialBatch.find(params[:id])
    if params[:material_usage_record][:operate_type_id].to_i == 1 || params[:material_usage_record][:operate_type_id].to_i ==5
      @material_usage_record = @material_batch.material_usage_records.build(params[:material_usage_record].merge(after_qty: @material_batch.qty + params[:material_usage_record][:qty].to_i, user_id: current_user.id, material_id: @material_batch.material_id))
      if @material_usage_record.save
        @material_batch.update_attributes(qty: @material_batch.qty + params[:material_usage_record][:qty].to_i)
        flash[:notice] = "调整成功"
        render inline: "<script>parent.location.reload();</script>"
      else
        redirect_to :back, alert: '调整失败'
      end
    else
      if @material_batch.qty < params[:material_usage_record][:qty].to_i
        flash[:notice] = "调整数量大于批次库存现有数量，调整失败"
        render inline: "<script>parent.location.reload();</script>"
      else
        @material_usage_record = @material_batch.material_usage_records.build(params[:material_usage_record].merge(after_qty: @material_batch.qty - params[:material_usage_record][:qty].to_i, user_id: current_user.id, material_id: @material_batch.material_id))
        if @material_usage_record.save
          @material_batch.update_attributes(qty: @material_batch.qty - params[:material_usage_record][:qty].to_i)
          flash[:notice] = "调整成功"
          render inline: "<script>parent.location.reload();</script>"
        else
          redirect_to :back, alert: '调整失败'
        end
      end
    end
  end

  private

  def find_material_batch
    @material_batch = MaterialBatch.find(params[:id])
  end
end