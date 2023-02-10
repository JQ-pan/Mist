# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'Demo-lition', 
      email: 'demo@user.io', 
      password: 'password'
    )

    User.create!(
      username: 'Guest',
      email: 'guest@guest.com',
      password: 'password'
    )
  
    # More users
    # 10.times do 
    #   User.create!({
    #     username: Faker::Internet.unique.username(specifier: 3),
    #     email: Faker::Internet.unique.email,
    #     password: 'password'
    #   }) 
    # end
  
    Game.create!([
      {
        title: "Super Mario Bros.",
        description: "Super Mario Bros. is a classic side-scrolling platform game developed and published by Nintendo. Players control Mario as he tries to rescue Princess Toadstool from the evil Bowser.",
        developer: "Nintendo R&D4",
        publisher: "Nintendo",
        price: 49.99,
        release_date: "September 13, 1985",
        featured: true,
        images: [

        ]
      # },
      # {
      #   title: "",
      #   description: "",
      #   developer: "",
      #   publisher: "",
      #   price: "",
      #   release_date: "",
      #   featured: "",
      #   images: ""
      # },
      # {
      #   title: "",
      #   description: "",
      #   developer: "",
      #   publisher: "",
      #   price: "",
      #   release_date: "",
      #   featured: "",
      #   images: ""
      # },
      # {
      #   title: "",
      #   description: "",
      #   developer: "",
      #   publisher: "",
      #   price: "",
      #   release_date: "",
      #   featured: "",
      #   images: ""
      # },
      # {
      #   title: "",
      #   description: "",
      #   developer: "",
      #   publisher: "",
      #   price: "",
      #   release_date: "",
      #   featured: "",
      #   images: ""
      # },
      # {
      #   title: "",
      #   description: "",
      #   developer: "",
      #   publisher: "",
      #   price: "",
      #   release_date: "",
      #   featured: "",
      #   images: ""
      # },
      # {
      #   title: "",
      #   description: "",
      #   developer: "",
      #   publisher: "",
      #   price: "",
      #   release_date: "",
      #   featured: "",
      #   images: ""
      # },
      # {
      #   title: "",
      #   description: "",
      #   developer: "",
      #   publisher: "",
      #   price: "",
      #   release_date: "",
      #   featured: "",
      #   images: ""
      # },
      # {
      #   title: "",
      #   description: "",
      #   developer: "",
      #   publisher: "",
      #   price: "",
      #   release_date: "",
      #   featured: "",
      #   images: ""
      # },
      # {
      #   title: "",
      #   description: "",
      #   developer: "",
      #   publisher: "",
      #   price: "",
      #   release_date: "",
      #   featured: "",
      #   images: ""
      # },
      # {
      #   title: "",
      #   description: "",
      #   developer: "",
      #   publisher: "",
      #   price: "",
      #   release_date: "",
      #   featured: "",
      #   images: ""
      # },
      # {
      #   title: "",
      #   description: "",
      #   developer: "",
      #   publisher: "",
      #   price: "",
      #   release_date: "",
      #   featured: "",
      #   images: ""
      # },
      # {
      #   title: "",
      #   description: "",
      #   developer: "",
      #   publisher: "",
      #   price: "",
      #   release_date: "",
      #   featured: "",
      #   images: ""
      # },
      # {
      #   title: "",
      #   description: "",
      #   developer: "",
      #   publisher: "",
      #   price: "",
      #   release_date: "",
      #   featured: "",
      #   images: ""
      # },
      # {
      #   title: "",
      #   description: "",
      #   developer: "",
      #   publisher: "",
      #   price: "",
      #   release_date: "",
      #   featured: "",
      #   images: ""
      # },
      # {
      #   title: "",
      #   description: "",
      #   developer: "",
      #   publisher: "",
      #   price: "",
      #   release_date: "",
      #   featured: "",
      #   images: ""
      # },
      # {
      #   title: "",
      #   description: "",
      #   developer: "",
      #   publisher: "",
      #   price: "",
      #   release_date: "",
      #   featured: "",
      #   images: ""
      # },
      # {
      #   title: "",
      #   description: "",
      #   developer: "",
      #   publisher: "",
      #   price: "",
      #   release_date: "",
      #   featured: "",
      #   images: ""
      # },
      # {
      #   title: "",
      #   description: "",
      #   developer: "",
      #   publisher: "",
      #   price: "",
      #   release_date: "",
      #   featured: "",
      #   images: ""
      # },
      # {
      #   title: "",
      #   description: "",
      #   developer: "",
      #   publisher: "",
      #   price: "",
      #   release_date: "",
      #   featured: "",
      #   images: ""
      }
    ]
    )

    puts "Done!"
  end