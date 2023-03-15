# == Schema Information
#
# Table name: library_items
#
#  id         :bigint           not null, primary key
#  game_id    :integer          not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class LibraryItem < ApplicationRecord
    validates :owner_id, uniqueness: { scope: :game_id, message: 'User already has this game in the library'}

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    belongs_to :game,
        foreign_key: :game_id,
        class_name: :Game

end
