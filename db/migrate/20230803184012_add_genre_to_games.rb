class AddGenreToGames < ActiveRecord::Migration[7.0]
  def change
    add_column :games, :genre, :string, array: true, null: false, default: []
  end
end
