# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_15_044402) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cart_items", force: :cascade do |t|
    t.integer "game_id", null: false
    t.integer "buyer_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["buyer_id", "game_id"], name: "index_cart_items_on_buyer_id_and_game_id", unique: true
    t.index ["buyer_id"], name: "index_cart_items_on_buyer_id"
    t.index ["game_id"], name: "index_cart_items_on_game_id"
  end

  create_table "games", force: :cascade do |t|
    t.string "title", null: false
    t.text "description", null: false
    t.string "developer", null: false
    t.string "publisher", null: false
    t.decimal "price", precision: 8, scale: 2, null: false
    t.string "release_date", null: false
    t.boolean "featured", default: false, null: false
    t.string "images", default: [], null: false, array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["featured"], name: "index_games_on_featured"
    t.index ["title"], name: "index_games_on_title"
  end

  create_table "library_items", force: :cascade do |t|
    t.integer "game_id", null: false
    t.integer "owner_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_library_items_on_game_id"
    t.index ["owner_id", "game_id"], name: "index_library_items_on_owner_id_and_game_id", unique: true
    t.index ["owner_id"], name: "index_library_items_on_owner_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "game_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
