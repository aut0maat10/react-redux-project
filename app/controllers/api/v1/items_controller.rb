module Api 
  module V1
    class ItemsController < ApplicationController
      
      before_action :set_item, only: [:show, :update, :destroy]

      def index
        render json: Item.all 
      end

      def new
        @item = Item.new
      end 

      def create
        @item = Item.new(item_params)
        if @item.save
          render json: @item, status: 201
        else
          render json: { errors: @item.errors.full_messages }, status: 422 
        end
      end 

      def show
        render json: Item.find(params[:id])
      end 

      def update
        @item.update_attributes(likes: @item.likes + 1)
        render json: @item 
      end 

      def destroy
        @item.destroy
        render :show, status: :ok
      end

      private 
      
      def set_item
        @item = Item.find(params[:id])
      end 

      def item_params
        params.require(:item).permit(:id, :name, :description, :price, :seller_name, :seller_phone, :likes)
      end 

    end
  end
  
end