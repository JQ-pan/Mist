@games.each do |game|
    json.set! game.id do
        json.extract! game, :id, :title, :description, :developer, :publisher, :price, :release_date, :images
        # json.extract! game, :id, :title, :price, :images
    end
end