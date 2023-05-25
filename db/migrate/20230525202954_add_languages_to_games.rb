class AddLanguagesToGames < ActiveRecord::Migration[7.0]
  def change
    add_column :games, :language, :text, array: true, null: false
  end
end
