# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_17_203001) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attempts", force: :cascade do |t|
    t.integer "total_score"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id", null: false
    t.boolean "albania"
    t.boolean "andorra"
    t.boolean "austria"
    t.boolean "belarus"
    t.boolean "belgium"
    t.boolean "bosnia"
    t.boolean "bulgaria"
    t.boolean "croatia"
    t.boolean "cyprus"
    t.boolean "czechia"
    t.boolean "denmark"
    t.boolean "estonia"
    t.boolean "finland"
    t.boolean "france"
    t.boolean "germany"
    t.boolean "greece"
    t.boolean "hungary"
    t.boolean "iceland"
    t.boolean "ireland"
    t.boolean "italy"
    t.boolean "kosovo"
    t.boolean "latvia"
    t.boolean "liechtenstein"
    t.boolean "lithuania"
    t.boolean "luxembourg"
    t.boolean "malta"
    t.boolean "moldova"
    t.boolean "monaco"
    t.boolean "montenegro"
    t.boolean "netherlands"
    t.boolean "north_macedonia"
    t.boolean "norway"
    t.boolean "poland"
    t.boolean "portugal"
    t.boolean "romania"
    t.boolean "russia"
    t.boolean "san_marino"
    t.boolean "serbia"
    t.boolean "slovakia"
    t.boolean "slovenia"
    t.boolean "spain"
    t.boolean "sweden"
    t.boolean "switzerland"
    t.boolean "turkey"
    t.boolean "ukraine"
    t.boolean "united_kingdom"
    t.boolean "vatican_city"
    t.index ["user_id"], name: "index_attempts_on_user_id"
  end

  create_table "countries", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "map_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "attempts", "users"
end
