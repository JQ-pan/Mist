class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false, foreign_key: true
      t.integer :game_id, null: false, foreign_key: true
      t.text :body, null: false
      
      t.timestamps
    end
  end
end
