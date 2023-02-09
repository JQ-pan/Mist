class Game < ApplicationRecord
    validates :title, :developer, :publisher, :release_date, presence: true
    validates :price, numericality: { greater_than_or_equal_to: 0 }
end
