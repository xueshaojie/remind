class Admin::ItemsController < Admin::BaseController

	before_filter :find_asset
	before_filter :find_asset_item, only: [:edit, :update, :destroy]
	def index
		@search = @asset.asset_items.search(params[:search])
		@asset_items = @search.page(params[:page]).per(20)
	end

	def new
		@asset_item = @asset.asset_items.build
		render layout: 'application_pop'
	end

	def create
		@asset_item = @asset.asset_items.build(params[:asset_item])
		if @asset_item.save
			flash[:notice] = "保存成功"
		    render inline: "<script>parent.location.reload();</script>"
		else
			redirect_to :back , alert: '保存失败'
		end
	end

	def edit
		render layout: 'application_pop'
	end

	def update
		if @asset_item.update_attributes(params[:asset_item])
			flash[:notice] = "更新成功"
		    render inline: "<script>parent.location.reload();</script>"
		else
			redirect_to :back , alert: '更新失败'
		end
	end

	def destroy
		if @asset_item.destroy
			redirect_to :back, notice: '删除成功'
		else
			redirect_to :back, alert: '删除失败' 
		end
	end

	private
	def find_asset
		@asset = Asset.find(params[:asset_id])
	end

	def find_asset_item
		@asset_item = AssetItem.find(params[:id])
	end
end