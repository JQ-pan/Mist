class Api::CartItemsController < ApplicationController
    before_action :require_logged_in
    
    def index
        @cart_items = CartItem.where(buyer_id: current_user.id)
        render 'api/cart_items/index'
    end

    def create
        @cart_item = CartItem.new(buyer_id: current_user.id, game_id: cart_item_params[:game_id])
        
        if @cart_item.save!
            render 'api/cart_items/show'
        else
            render json: { errors: @cart_item.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        # debugger
        # @cart_item = CartItem.where(buyer_id: current_user.id, game_id: cart_item_params[:game_id])
        @cart_item = CartItem.find_by(game_id: params[:id])
        # debugger
        @cart_item.destroy
        # render 'api/cart_items/index'
    end

    private

    def cart_item_params
        params.require(:cart_item).permit(:game_id)
    end

end
