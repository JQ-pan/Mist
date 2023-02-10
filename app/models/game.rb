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
#  release_date :string           not null
#  featured     :boolean          default(FALSE), not null
#  images       :string           default([]), not null, is an Array
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Game < ApplicationRecord
    validates :title, :developer, :publisher, :release_date, presence: true
    validates :images, presence: true, length: { minimum: 1 }
    validates :featured, presence: true
    validates :price, numericality: { greater_than: 0 }
    validate :images_not_empty
    
    def images_not_empty
        errors.add(:images, 'must have image') if images.empty?
    end
    
end
