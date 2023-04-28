@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :author_id, :game_id, :body, :recommended, :created_at
    end

    # json.reviews! do
    #     json.set! review.id do
    #         json.extract! review, :id, :author_id, :body, :recommended, :created_at
    #     end
    # end

    # json.users! do
    #     json.set! review.user.id do
    #         json.extract! review.user, :id, :username
    #     end
    # end
end
