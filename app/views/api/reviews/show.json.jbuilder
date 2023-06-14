@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :author_id, :game_id, :body, :recommended, :created_at
    end
end
