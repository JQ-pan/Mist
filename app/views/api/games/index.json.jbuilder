@games.each do |game|
    json.set! game.id do
        json.extract! game, :id, :title, :description, :developer, :publisher, :price, :image
    end
end

json.games_ids @games.pluck(:id)