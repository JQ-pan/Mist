@games.each do |game|
    json.set! game.id do
        json.extract! game, :id, :title, :description, :developer, :publisher, :price, :release_date, :images
    end
end