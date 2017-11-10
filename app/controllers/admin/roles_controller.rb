class Admin::RolesController < Admin::BaseController

    before_filter :find_role, only: [:edit, :update, :destroy]

    def index
        @search = Role.search(params[:search])
        @roles = @search.order("id asc").page(params[:page])
    end

    def new
        @role = Role.new(params[:role])
        render layout: 'application_pop'
    end

    def create
        @role = Role.new(params[:role])
        if @role.save
            flash[:notice] = "保存成功"
        render inline: "<script>parent.location.reload();</script>"
        else
            return redirect_to :back , alert: '保存失败，请确认数据正确和必填项。'
        end
    end

    def edit
        render layout: 'application_pop'
    end

    def update
        if @role.update_attributes(params[:role])
            flash[:notice] = "更新成功"
      render inline: "<script>parent.location.reload();</script>"
        else
            return redirect_to :back , alert: '更新失败，请确认数据正确和必填项。'
        end
    end

    def destroy
        @role = Role.find(params[:id])
        if @role.destroy
            redirect_to :back, notice: '删除成功'
        else
            redirect_to :back, notice: '删除失败'
        end
    end

    private
    def find_role
        @role = Role.find(params[:id])
    end
end
