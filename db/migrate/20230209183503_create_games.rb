class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :developer, null: false
      t.string :publisher, null: false
      t.integer :price, null: false
      t.date :release_date, null: false
      t.boolean :featured, null: false, default: false
      t.string :image, null: false, default: ""
      t.timestamps
    end

    add_index :games, :title
    add_index :games, :featured
  end
end
