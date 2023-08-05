@games.each do |game|
    json.set! game.id do
        json.extract! game, :id, :title, :description, :long_description, :developer, :publisher, :price, :release_date, :images, :language, :tag
        # json.extract! game, :id, :title, :price, :images
    end
end