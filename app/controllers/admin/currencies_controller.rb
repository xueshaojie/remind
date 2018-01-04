class Admin::CurrenciesController < Admin::BaseController

  before_filter :find_currency, only: [:update_sort]

  def index
    params[:search] ||= {}
    params[:search][:created_at_gte], params[:search][:created_at_lte] = params[:search].delete(:created_at_between).split(' - ') if params[:search][:created_at_between]

  	@search = Currency.normal.search(params[:search])
  	@currencies = @search.page(params[:page]).order("position desc")
  end

  def update_sort
    @currency.update_attributes(position: params[:position])
    render js: "showTip('notice', '修改成功');"
  end

  private

    def find_currency
      @currency = Currency.normal.find(params[:id].to_i)
    end

end
