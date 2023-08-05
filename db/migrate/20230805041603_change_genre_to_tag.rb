class ChangeGenreToTag < ActiveRecord::Migration[7.0]
  def change
    rename_column :games, :genre, :tag
  end
end
