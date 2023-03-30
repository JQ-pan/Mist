@library_items.each do |library_item|
    json.library_items do
        json.set! library_item.id do
            json.extract! library_item, :id, :owner_id, :game_id
        end
    end

    json.games do
        json.set! library_item.game.id do
            json.extract! library_item.game, :id, :title, :description, :developer, :publisher, :price, :images
        end
    end

    json.users do
        json.set! library_item.owner_id do
            json.extract! library_item.owner, :username
        end
    end
end