class ItemsController < ApplicationController
  def index
    render json: Item.all 
  end

  def new
    @item = Item.new
  end 

  def create
    @item = Item.new(item_params)
    if @item.save
      render json: 'index' 
    end
  end 

  def show
    render json: Item.find(params[:id])
  end 

  private 
      
    def item_params
      params.require(:item).permit(:name)
    end 
  
end