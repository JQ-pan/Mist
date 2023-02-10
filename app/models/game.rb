# == Schema Information
#
# Table name: games
#
#  id           :bigint           not null, primary key
#  title        :string           not null
#  description  :text             not null
#  developer    :string           not null
#  publisher    :string           not null
#  price        :decimal(8, 2)    not null
#  release_date :date             not null
#  featured     :boolean          default(FALSE), not null
#  images       :text             default([]), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Game < ApplicationRecord
    validates :title, :developer, :publisher, :release_date, :images, presence: true
    validates :release_date, presence: true
    validates :featured, presence: true
    validates :price, numericality: { greater_than: 0 }
    serialize :images, Array
    validate :images_not_empty
    
    def image_not_empty
        errors.add(:images, 'must have image') if images.empty?
    end
    
end
