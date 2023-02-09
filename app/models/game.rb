# == Schema Information
#
# Table name: games
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  description  :text             not null
#  developer    :string           not null
#  publisher    :string           not null
#  price        :integer          not null
#  release_date :date             not null
#  featured     :boolean          default(FALSE), not null
#  image        :string           default(""), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Game < ApplicationRecord
    validates :title, :developer, :publisher, :price, :release_date, presence: true
    validates :release_date, presence: true
    validates :featured, presence: true
    
    def image_not_empty
        errors.add(:image, 'must have image') unless image.length > 0
    end

end
