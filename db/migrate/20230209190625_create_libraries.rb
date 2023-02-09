class CreateLibraries < ActiveRecord::Migration[7.0]
  def change
    create_table :libraries do |t|
      t.integer :game_id, null: false, foreign_key: true
      t.integer :owner_id, null: false, foreign_key: true
      t.timestamps
    end
    add_index :libraries, :game_id
    add_index :libraries, :owner_id
    # each user's library cannot have duplicates of a game
    add_index :libraries, [:owner_id, :game_id], unique: true
  end
end
