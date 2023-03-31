class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index 
        @reviews = Review.all
        render :index
#         @reviews = Review.includes(:user).all
#   render json: @reviews.to_json(include: { user: { only: [:id, :name, :email] } })
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            puts "saved"
            # render json: @review, status: :created
            render :show, status: :created
        else
            puts "not saved"
            render json: @review.errors, status: :unprocessable_entity
        end
    end
    
    def update
        @review = Review.find(params[:id])

        puts "review_params: "
        puts review_params

        if @review.update(review_params)
            render :show, status: :ok
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
