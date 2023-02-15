class Api::CartItemsController < ApplicationController
    before_action :require_logged_in
    
    def index
        # @cart_items = current_user.cart_items.includes(:game)
        @cart_items = CartItem.includes(:game, :user).where(user_id: current_user.id)
        render 'api/cart_items/index'
    end

    def create
        # @cart_item = current_user.cart_items.new(cart_item_params)
        @cart_item = CartItem.new(user_id: current_user.id, game_id: cart_item_params.game_id)
        if @cart_item.save
            # @cart_items = current_user.cart_items.includes(:game)
            render 'api/cart_items/index'
        else
            render json: { errors: @cart_item.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        # @cart_item = current_user.cart_items.find(params[:id])
        @cart_item = CartItem.where(user_id: current_user.id, game_id: cart_item_params.game_id)
        @cart_item.destroy
        # @cart_items = current_user.cart_items.includes(:game)
        render 'api/cart_items/index'
    end

    private

    def cart_item_params
        params.require(:cart_item).permit(:game_id)
    end

end
