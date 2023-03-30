# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  author_id   :integer          not null
#  game_id     :integer          not null
#  body        :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  recommended :boolean          not null
#
class Review < ApplicationRecord
    validates :author_id, :game_id, presence: true
    validates :author_id, uniqueness: {scope: :game_id, message: "has already reviewed this game"}
    validates :body, presence: true
    validates :recommended, inclusion: { in: [true, false] }

    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :game,
        foreign_key: :game_id,
        class_name: :Game
end
