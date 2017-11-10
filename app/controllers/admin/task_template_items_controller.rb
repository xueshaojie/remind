class Admin::TaskTemplateItemsController < Admin::BaseController
	skip_before_filter :page_can?

	before_filter :auth
	before_filter :find_task_template_item, only: [:edit, :update, :destroy, :up, :down]
	before_filter :find_task_template

	def index
		@task_template_items = @task_template.task_template_items.normal.order("position asc")
	end

	def new
		@task_template_item = @task_template.task_template_items.build
		render layout: 'application_pop'
	end

	def create
		@task_template_item = @task_template.task_template_items.build(params[:task_template_item])
		if @task_template_item.save
			# @task_template_item.update_attributes(position: @task_template_item.id)
			flash[:notice] = "创建成功"
	  	render inline: "<script>parent.location.reload();</script>"
		else
			redirect_to :back, notice: '创建失败'
		end
	end

	def edit
		render layout: 'application_pop'
	end

	def update
		if @task_template_item.update_attributes(params[:task_template_item])
			flash[:notice] = "更新成功"
	  	render inline: "<script>parent.location.reload();</script>"
		else
			redirect_to :back, notice: '更新失败'
		end
	end

	def destroy
		if @task_template_item.disabled!
			redirect_to :back, notice: '删除成功'
		else
			redirect_to :back, notice: '删除失败'
		end
	end

	def up
	    for i in 1..@task_template.task_template_items.count
	      @pre_task_template_item = @task_template.task_template_items.where(position: @task_template_item.position + i).first
	      if @pre_task_template_item.normal?
	        break
	      else
	        next
	      end
	    end
	    position = @pre_task_template_item.position
	    @pre_task_template_item.update_attributes(position: @task_template_item.position)
	    @task_template_item.update_attributes(position: position)
	    redirect_to :back, notice: '操作成功'
	end

	def down
	    for i in 1..@task_template.task_template_items.count
	      @pre_task_template_item = @task_template.task_template_items.where(position: @task_template_item.position - i).first
	      if @pre_task_template_item.normal?
	        break
	      else
	        next
	      end
	    end
	    position = @pre_task_template_item.position
	    @pre_task_template_item.update_attributes(position: @task_template_item.position)
	    @task_template_item.update_attributes(position: position)
	    redirect_to :back, notice: '操作成功'
	end

	private
	def find_task_template_item
		@task_template_item = TaskTemplateItem.find(params[:id])
	end

	def find_task_template
		@task_template = TaskTemplate.where(id: params[:task_template_id]).first
	end

	def auth
		if can?(6)
			return true
		else
			render text: '无权访问!'
		end
	end
end