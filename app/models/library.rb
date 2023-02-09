# == Schema Information
#
# Table name: libraries
#
#  id         :bigint           not null, primary key
#  game_id    :integer          not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Library < ApplicationRecord
    validates :game_id, :owner_id, presence: true
    validates :game_id, uniqueness: { scope: :owner_id }
    
    # belongs_to :game,
    #     foreign_key: :game_id,
    #     class_name: :Game
        
    # belongs_to :owner,
    #     foreign_key: :owner_id, 
    #     class_name: :User
end
