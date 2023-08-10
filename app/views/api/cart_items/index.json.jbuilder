if @cart_items.length
    @cart_items.each do |cart_item|
        json.cart_item do
            json.set! cart_item.id do
                json.extract! cart_item, :id, :buyer_id, :game_id
            end
        end

        json.games do 
            json.set! cart_item.game.id do 
                json.extract! cart_item.game, :id, :title, :price, :images
            end
        end
    end
else
    json.cart_items({})
    json.games({})
end