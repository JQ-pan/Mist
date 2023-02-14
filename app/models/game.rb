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
    validates :price, numericality: { greater_than_or_equal_to: 0 }
    validate :images_not_empty
    
    has_many :cart_items,
        foreign_key: :game_id,
        class_name: :CartItems

    has_many :buyers,
        through: :cart_items,
        source: :user

    def images_not_empty
        errors.add(:images, 'must have image') if images.empty?
    end
    
end
