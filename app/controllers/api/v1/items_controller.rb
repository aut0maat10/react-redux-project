module Api 
  module V1
    class ItemsController < ApplicationController
      
      before_action :set_article, only: [:show, :destroy]

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

      def destroy
        @item.destroy
        render :show, status: :ok
      end

      private 
      
      def set_article
        @article = Article.find(params[:id])
      end 

      def item_params
        params.require(:item).permit(:name)
      end 

    end
  end
  
end