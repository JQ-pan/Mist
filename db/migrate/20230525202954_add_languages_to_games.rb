class AddLanguagesToGames < ActiveRecord::Migration[7.0]
  def change
    add_column :games, :language, :string, array: true, null: false, default: []
  end
end
