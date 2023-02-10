class Api::GamesController < ApplicationController
    def index
        @games = Game.all

        render 'api/games/index'
    end

    def show
        @game = Game.find_by(id: params[:id])
        if @game
            render 'api/games/show'
        else
            render json: {}
        end
    end
end
