class Api::LibraryItemsController < ApplicationController
    before_action :require_logged_in

    def index
        @library_items = LibraryItem.where(owner_id: current_user.id)
        render 'api/library_items/index'
    end

    def create
        @library_item = LibraryItem.new(owner_id: current_user.id, game_id: library_item_params[:game_id])

        if @library_item.save!
            render 'api/library_items/show'
        else
            render json: { error: @library_item.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def library_item_params
        params.require(:library_item).permit(:game_id)
    end
end
