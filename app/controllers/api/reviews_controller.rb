class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index 
        p "index"
        @reviews = Review.all
        render 'api/reviews/index'
    end

    def show
        @reviews = Review.where(game_id: params[:id])
        if @reviews
            render 'api/reviews/show'
        else
            render json: {}
        end
    end

    def create
        @review = Review.new(review_params)
        @reviews = Review.where(game_id: params[:game_id])
        if @review.save
            render 'api/reviews/show'
        else
            render json: @review.errors, status: :unprocessable_entity
        end
    end
    
    def update
        @review = Review.find(params[:id])

        if @review.update(review_params)
            render 'api/reviews/show'
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
