# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  game_id    :integer          not null
#  buyer_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord
    validates :buyer_id, uniqueness: { scope: :game_id, message: 'User already has this game in the cart'}

    belongs_to :user,
        foreign_key: :buyer_id,
        class_name: :User

    belongs_to :game, 
        foreign_key: :game_id,
        class_name: :Game
        
end
