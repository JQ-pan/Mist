class CreateCartItems < ActiveRecord::Migration[7.0]
  def change
    create_table :cart_items do |t|
      t.integer :game_id, null: false, foreign_key: true
      t.integer :buyer_id, null: false, foreign_key: true
      t.timestamps
    end
    add_index :cart_items, :buyer_id
    add_index :cart_items, :game_id
    add_index :cart_items, [:buyer_id, :game_id], unique: true
  end
end
