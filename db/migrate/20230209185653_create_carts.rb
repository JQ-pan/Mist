class CreateCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :carts do |t|
      t.integer :game_id, null: false, foreign_key: true
      t.integer :buyer_id, null: false, foreign_key: true
      t.timestamps
    end
    add_index :carts, :buyer_id
    add_index :carts, :game_id
    # each user's cart cannot duplicates of a game
    add_index :carts, [:buyer_id, :game_id], unique: true
  end
end
