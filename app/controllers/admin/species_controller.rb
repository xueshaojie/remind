class Admin::SpeciesController < Admin::BaseController

	before_filter :find_species, only: [:edit, :update, :destroy, :adjust, :deal]
	def index
		params[:search] ||= {}
    params[:search][:created_at_gte], params[:search][:created_at_lte] = params[:search].delete(:created_at_created_at_between).split(' - ') if params[:search][:created_at_created_at_between]

		@search = Species.normal.search(params[:search])
		@species = @search.order("created_at desc").page(params[:page])
	end

	def new
		@species = Species.new
		render layout: 'application_pop'
	end

	def create
		@species = Species.new(params[:species])
		if @species.save
			flash[:notice] = "保存成功"
		    render inline: "<script>parent.location.reload();</script>"
		else
			redirect_to :back, alert: '保存失败'
		end
	end

	def edit
		render layout: 'application_pop'
	end

	def update
		if @species.update_attributes(params[:species])
			flash[:notice] = "更新成功"
		    render inline: "<script>parent.location.reload();</script>"
		else
			redirect_to :back, alert: '更新失败'
		end
	end

	def destroy
    if @species.species_adjustments.count > 0
      return redirect_to :back, alert:'已经被使用，不能删除!'
    elsif @species.destroy
      redirect_to :back, notice:'删除成功'
		else
			redirect_to :back, alert: '删除失败'
		end
	end

	def adjust
		@species_adjustment = SpeciesAdjustment.new(operate_type_id: params[:type])
		render layout: 'application_pop'
	end

	def deal
		if [1,4].include?(params[:species_adjustment][:operate_type_id].to_i)
			@species_adjustment = @species.species_adjustments.build(params[:species_adjustment].merge(after_qty: @species.qty + params[:species_adjustment][:qty].to_i, user_id: current_user.id))
			if @species_adjustment.save
				@species.update_attributes(qty: @species.qty + params[:species_adjustment][:qty].to_i)
				flash[:notice] = "调整成功"
			    render inline: "<script>parent.location.reload();</script>"
			else
				redirect_to :back, alert: '调整失败'
			end
		else
			if @species.qty < params[:species_adjustment][:qty].to_i
				flash[:notice] = "调整数量大于库存现有数量，调整失败"
			  render inline: "<script>parent.location.reload();</script>"
			else
				@species_adjustment = @species.species_adjustments.build(params[:species_adjustment].merge(after_qty: @species.qty - params[:species_adjustment][:qty].to_i, user_id: current_user.id))
				if @species_adjustment.save
					@species.update_attributes(qty: @species.qty - params[:species_adjustment][:qty].to_i)
					flash[:notice] = "调整成功"
				    render inline: "<script>parent.location.reload();</script>"
				else
					redirect_to :back, alert: '调整失败'
				end
			end
		end
	end

	private
	def find_species
		@species = Species.find(params[:id])
	end
end