class ItemsController < ApplicationController
  def index
    @items = Item.all 
    render json: @items.to_json
    # q = params[:q]

    # if q.blank?
    #   render status: 400, json: { error: 'Expected parameter `q` '}
    # else
    #   render(
    #     status: 200,
    #     json: Item.where(["description LIKE ?", "%#{q}%"]).limit(100)
    #   )
    # end
  end

  def new
    @item = Item.new
  end 

  def create
    @item = Item.new(item_params)
    if @item.save
      render json: 'index' 
  end 

  private 
      
    def item_params
      params.require(:item).permit(:name)
    end 
  end 
end