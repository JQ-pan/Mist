# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require "open-uri"

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Game.destroy_all
    LibraryItem.destroy_all
    Review.destroy_all
    
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
    puts "Creating more users..."
    10.times do 
      User.create!({
        username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end


    
    puts "Seeding images..."

    super_mario_bros_images, legend_of_zelda_images, contra_images, metroid_images, castlevania_images, final_fantasy_images, double_dragon_images, mega_man_images, duck_hunt_images = Array.new(10) { [] }

    7.times do |i|
      super_mario_bros_images << "https://mist-seeds.s3.amazonaws.com/super-mario-bros/super-mario-bros-#{i+1}.jpg"
    end

    7.times do |i|
      legend_of_zelda_images << "https://mist-seeds.s3.amazonaws.com/legend-of-zelda/legend-of-zelda-#{i+1}.jpg"
    end

    7.times do |i|
      contra_images << "https://mist-seeds.s3.amazonaws.com/contra/contra-#{i+1}.jpg"
    end

    7.times do |i|
      metroid_images << "https://mist-seeds.s3.amazonaws.com/metroid/metroid-#{i+1}.jpg"
    end

    7.times do |i|
      castlevania_images << "https://mist-seeds.s3.amazonaws.com/castlevania/castlevania-#{i+1}.jpg"
    end

    7.times do |i|
      final_fantasy_images << "https://mist-seeds.s3.amazonaws.com/final-fantasy/final-fantasy-#{i+1}.jpg"
    end

    7.times do |i|
      double_dragon_images << "https://mist-seeds.s3.amazonaws.com/double-dragon/double-dragon-#{i+1}.jpg"
    end

    7.times do |i|
      mega_man_images << "https://mist-seeds.s3.amazonaws.com/mega-man/mega-man-#{i+1}.jpg"
    end

    7.times do |i|
      duck_hunt_images << "https://mist-seeds.s3.amazonaws.com/duck-hunt/duck-hunt-#{i+1}.jpg"
    end

    puts "Creating games..."

    Game.create!([
      {
        title: "Super Mario Bros.",
        description: "Super Mario Bros. is a classic side-scrolling platform game developed and published by Nintendo. Players control Mario as he tries to rescue Princess Toadstool from the evil Bowser.",
        developer: "Nintendo R&D4",
        publisher: "Nintendo",
        price: 49.99,
        release_date: "September 13, 1985",
        featured: true,
        images: super_mario_bros_images
      },
      {
        title: "The Legend of Zelda",
        description: "The Legend of Zelda is an action-adventure game developed and published by Nintendo. Players control a young hero named Link as he travels through the land of Hyrule to rescue Princess Zelda and defeat the evil Ganon.",
        developer: "Nintendo R&D4",
        publisher: "Nintendo",
        price: 49.99,
        release_date: "February 21, 1986",
        featured: true,
        images: legend_of_zelda_images
      },
      {
        title: "Contra",
        description: "Contra is a run and gun action game developed and published by Konami. Players control soldiers Bill Rizer and Lance Bean as they battle against alien forces and save the world from destruction.",
        developer: "Konami",
        publisher: "Konami",
        price: 49.99,
        release_date: "February 20, 1987",
        featured: true,
        images: contra_images
      },
      {
        title: "Metroid",
        description: "Metroid is a sci-fi action-adventure game developed and published by Nintendo. Players control Samus Aran, a female bounty hunter, as she explores the mysterious planet Zebes, battles enemies, and uncovers secrets.",
        developer: "Nintendo R&D1",
        publisher: "Nintendo",
        price: 49.99,
        release_date: "August 6, 1986",
        featured: true,
        images: metroid_images
      },
      {
        title: "Castlevania",
        description: "Castlevania is a platformer-style action game developed and published by Konami. Players control Simon Belmont as he battles against the forces of evil, including the legendary vampire Dracula, in a quest to save Transylvania.",
        developer: "Konami",
        publisher: "Konami",
        price: 49.99,
        release_date: "May 1, 1987",
        featured: true,
        images: castlevania_images
      },
      {
        title: "Final Fantasy",
        description: "Final Fantasy is a role-playing game developed and published by Square. Players control a group of heroes as they embark on a quest to save the world from destruction, battling against evil forces and discovering hidden secrets along the way.",
        developer: "Square",
        publisher: "Square",
        price: 49.99,
        release_date: "December 18, 1987",
        featured: true,
        images: final_fantasy_images
      },
      {
        title: "Double Dragon",
        description: "Double Dragon is a side-scrolling beat 'em up game developed and published by Technos Japan. Players control brothers Billy and Jimmy Lee as they battle against street gangs and other enemies in a quest to rescue Billy's girlfriend Marian.",
        developer: "Technos Japan",
        publisher: "Technos Japan",
        price: 49.99,
        release_date: "June 1987",
        featured: true,
        images: double_dragon_images
      },
      {
        title: "Mega Man",
        description: "Mega Man is a side-scrolling action game developed and published by Capcom. Players control the robot hero Mega Man as he battles against Dr. Wily and his army of robot masters, using their unique abilities to overcome challenges and save the world.",
        developer: "Capcom",
        publisher: "Capcom",
        price: 49.99,
        release_date: "December 17, 1987",
        featured: true,
        images: mega_man_images
      },
      {
        title: "Duck Hunt",
        description: "Duck Hunt is a light gun shooter game developed and published by Nintendo. Players use the NES Zapper to shoot ducks as they fly across the screen, with a hunting dog retrieving any that are hit. A classic of the NES era, Duck Hunt is best known for its charming gameplay and memorable sound effects.",
        developer: "Nintendo R&D1",
        publisher: "Nintendo",
        price: 29.99,
        release_date: "April 21, 1984",
        featured: true,
        images: duck_hunt_images
      }
    ]
    )

    

    # Creates library items"
    puts "Creating library items..."
    User.all[2..-1].each do |user|
      Game.all.each do |game|
        unless LibraryItem.exists?(owner_id: user.id, game_id: game.id)
          LibraryItem.create(owner_id: user.id, game_id: game.id)
        end
      end
    end
    
    # Creates reviews
    puts "Creating reviews..."
    User.all[2..-1].each do |user|
      Game.all.each do |game|
        Review.create(
          author_id: user.id,
          game_id: game.id,
          body: Faker::Lorem.paragraph(sentence_count: 5),
          recommended: [true, false].sample
        )
      end
    end
    puts "Done!"
    
  end
