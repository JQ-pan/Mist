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
    Game.destroy_all
    
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
        images: ["https://mario.wiki.gallery/images/c/c1/SMB_Logo_EN.png"]
      },
      {
        title: "The Legend of Zelda",
        description: "The Legend of Zelda is an action-adventure game developed and published by Nintendo. Players control a young hero named Link as he travels through the land of Hyrule to rescue Princess Zelda and defeat the evil Ganon.",
        developer: "Nintendo R&D4",
        publisher: "Nintendo",
        price: 49.99,
        release_date: "February 21, 1986",
        featured: true,
        images: ["https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda/2/28/Ign_loz_main_logo.jpg?width=960"]
      },
      {
        title: "Contra",
        description: "Contra is a run and gun action game developed and published by Konami. Players control soldiers Bill Rizer and Lance Bean as they battle against alien forces and save the world from destruction.",
        developer: "Konami",
        publisher: "Konami",
        price: 49.99,
        release_date: "February 20, 1987",
        featured: true,
        images: ["https://staticr1.blastingcdn.com/media/photogallery/2017/4/19/660x290/b_502x220x82/konami-contra-ixnite-ixnitecom_1281189.jpg"]
      },
      {
        title: "Metroid",
        description: "Metroid is a sci-fi action-adventure game developed and published by Nintendo. Players control Samus Aran, a female bounty hunter, as she explores the mysterious planet Zebes, battles enemies, and uncovers secrets.",
        developer: "Nintendo R&D1",
        publisher: "Nintendo",
        price: 49.99,
        release_date: "August 6, 1986",
        featured: true,
        images: ["https://static.wikia.nocookie.net/metroid/images/0/0d/M1_logo_EN.png/"]
      },
      {
        title: "Castlevania",
        description: "Castlevania is a platformer-style action game developed and published by Konami. Players control Simon Belmont as he battles against the forces of evil, including the legendary vampire Dracula, in a quest to save Transylvania.",
        developer: "Konami",
        publisher: "Konami",
        price: 49.99,
        release_date: "May 1, 1987",
        featured: true,
        images: ["https://upload.wikimedia.org/wikipedia/commons/1/15/Castlevania_logo.png"]
      },
      {
        title: "Final Fantasy",
        description: "Final Fantasy is a role-playing game developed and published by Square. Players control a group of heroes as they embark on a quest to save the world from destruction, battling against evil forces and discovering hidden secrets along the way.",
        developer: "Square",
        publisher: "Square",
        price: 49.99,
        release_date: "December 18, 1987",
        featured: true,
        images: ["https://static.wikia.nocookie.net/finalfantasy/images/c/c7/FFI_logo.png/"]
      },
      {
        title: "Double Dragon",
        description: "Double Dragon is a side-scrolling beat 'em up game developed and published by Technos Japan. Players control brothers Billy and Jimmy Lee as they battle against street gangs and other enemies in a quest to rescue Billy's girlfriend Marian.",
        developer: "Technos Japan",
        publisher: "Technos Japan",
        price: 49.99,
        release_date: "June 1987",
        featured: true,
        images: ["https://www.arcadeclub.co.uk/cdn/game-library/double-dragon/title/double-dragon-title.jpg"]
      }
    ]
    )
    puts "Done!"
  end