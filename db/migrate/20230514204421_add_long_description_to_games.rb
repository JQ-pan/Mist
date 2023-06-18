class AddLongDescriptionToGames < ActiveRecord::Migration[7.0]
  def change
    add_column :games, :long_description, :text
  end
end
