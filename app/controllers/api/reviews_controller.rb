class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index 
        @reviews = Review.where(game_id: params[:game_id])
        render 'api/reviews/index'
    end

    def create
        @review = Review.new(review_params)
        @reviews = Review.where(game_id: params[:game_id])
        if @review.save
            render 'api/reviews/index'
        else
            render json: @review.errors, status: :unprocessable_entity
        end
    end
    
    def update
        @review = Review.find(params[:id])

        if @review.update(review_params)
            render 'api/reviews/index'
        else
            render json: @review.errors, status: :unprocessable_entity
        end
    end
    
    def destroy
        @review = Review.find(params[:id])
        @review.destroy
    end

    private

    def review_params
        params.require(:review).permit(:body, :recommended, :author_id, :game_id)
    end
end
