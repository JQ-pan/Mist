if @cart_items.length > 0
    @cart_items.each do |cart_item|
        json.cart_items do
            json.set! cart_item.id do
                json.extract! cart_item, :id, :buyer_id, :game_id
            end
        end

        json.games do 
            json.set! cart_item.game.id do 
                json.extract! cart_item.game, :id, :title, :price
            end
        end

    end
else
    json.cart_items({})
    json.games({})
end