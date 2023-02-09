# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  game_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
    validates :author_id, :game_id, presence: true
    validates :author_id, uniqueness: {scope: :game_id}
end
