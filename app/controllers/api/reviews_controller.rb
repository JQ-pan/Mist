class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index 
        @reviews = Review.all
        render json: @reviews
    end

    def create
        @review = Review.new(review_params)
    
        if @review.save
            render json: @review, status: :created
        else
            render json: @review.errors, status: :unprocessable_entity
        end
    end
    
    def update
        @review = Review.find(params[:id])

        if @review.update(review_params)
            render json: @review, status: :ok
        else
            render json: @review.errors, status: :unprocessable_entity
        end
    end
    
    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        head :no_content
    end

    private

    def review_params
        params.require(:review).permit(:author_id, :game_id, :body, :recommended)
    end
end
