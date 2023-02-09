# == Schema Information
#
# Table name: carts
#
#  id         :bigint           not null, primary key
#  game_id    :integer          not null
#  buyer_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Cart < ApplicationRecord
    validates :game_id, :buyer_id, presence: true
    validates :game_id, uniqueness: { scope: :buyer_id }

    # belongs_to :game,
    #     foreign_key: :game_id,
    #     class_name: :Game

    # belongs_to :buyer, 
    #     foreign_key: :buyer_id,
    #     class_name: :User
end
