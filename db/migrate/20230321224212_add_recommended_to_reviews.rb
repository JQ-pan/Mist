class AddRecommendedToReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :recommended, :boolean, null: false
  end
end
