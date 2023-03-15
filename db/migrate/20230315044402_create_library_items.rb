class CreateLibraryItems < ActiveRecord::Migration[7.0]
  def change
    create_table :library_items do |t|
      t.integer :game_id, null: false, foreign_key: true
      t.integer :owner_id, null: false, foreign_key: true
      t.timestamps
    end
    add_index :library_items, :owner_id
    add_index :library_items, :game_id
    add_index :library_items, [:owner_id, :game_id], unique: true
  end
end
