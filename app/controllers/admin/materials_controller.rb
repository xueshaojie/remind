class Admin::MaterialsController < Admin::BaseController

	before_filter :find_material, only: [:edit, :update, :destroy]
	def index
		params[:search] ||= {}
    params[:search][:created_at_gte], params[:search][:created_at_lte] = params[:search].delete(:created_at_created_at_between).split(' - ') if params[:search][:created_at_created_at_between]

		@search = Material.search(params[:search])
		@materials = @search.order("materials.created_at desc").page(params[:page])
	end

	def new
		@material = Material.new
		render layout: 'application_pop'
	end

	def create
		@material = Material.new(params[:material])
		if @material.save
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
		if @material.update_attributes(params[:material])
			flash[:notice] = '更新成功'
			render inline: "<script>parent.location.reload();</script>"
		else
			redirect_to :back, alert: '更新失败'
		end
	end

	def destroy
		if @material.material_batches.present?
			return redirect_to :back, alert: '该物资下，存在相应的物资批次，禁止删除'
		elsif @material.destroy
			redirect_to :back, notice: '删除成功'
		else
			redirect_to :back, alert: '删除失败'
		end
	end

	private
	def find_material
		@material = Material.find(params[:id])
	end
end