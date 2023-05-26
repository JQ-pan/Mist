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
        long_description: "Super Mario Bros. is a timeless classic that has left an indelible mark on the world of gaming. Released in 1985, this side-scrolling platformer took the gaming industry by storm and introduced millions of players to the iconic plumber, Mario. In the game, players navigate through various colorful and imaginative levels, filled with obstacles, enemies, and hidden secrets. The goal is to rescue Princess Toadstool, who has been kidnapped by the nefarious Bowser, the king of the Koopas. With its tight controls, charming visuals, and catchy soundtrack, Super Mario Bros. offers a delightful and challenging experience that has stood the test of time.",
        developer: "Nintendo R&D4",
        publisher: "Nintendo",
        price: 49.99,
        release_date: "September 13, 1985",
        featured: true,
        images: super_mario_bros_images,
        language: ["Japanese", "English"]
      },
      {
        title: "The Legend of Zelda",
        description: "The Legend of Zelda is an action-adventure game developed and published by Nintendo. Players control a young hero named Link as he travels through the land of Hyrule to rescue Princess Zelda and defeat the evil Ganon.",
        long_description: "The Legend of Zelda is a seminal game that revolutionized the action-adventure genre. First released in 1986, this game introduced players to a vast and immersive world known as Hyrule. As the courageous hero Link, players embark on an epic quest to rescue Princess Zelda and thwart the plans of the malevolent Ganon. The game is filled with intricate puzzles, challenging enemies, and memorable characters, all set in a beautifully designed fantasy realm. With its open-ended gameplay and non-linear exploration, The Legend of Zelda offers players a sense of freedom and discovery unlike anything else at the time. It remains a beloved and influential title in the gaming industry.",
        developer: "Nintendo R&D4",
        publisher: "Nintendo",
        price: 49.99,
        release_date: "February 21, 1986",
        featured: true,
        images: legend_of_zelda_images,
        language: ["Japanese", "English"]
      },
      {
        title: "Contra",
        description: "Contra is a run and gun action game developed and published by Konami. Players control soldiers Bill Rizer and Lance Bean as they battle against alien forces and save the world from destruction.",
        long_description: "Contra is an adrenaline-fueled run and gun experience that has captivated gamers since its release in 1987. In the game, players assume the roles of the battle-hardened soldiers Bill Rizer and Lance Bean as they embark on a mission to save the world from an alien invasion. Armed with powerful weapons and power-ups, players must navigate through intense side-scrolling levels, battling hordes of enemies and epic bosses. Contra is known for its fast-paced gameplay, challenging difficulty, and cooperative multiplayer mode, where two players can join forces to take on the alien threat. With its iconic code, 'Up, Up, Down, Down, Left, Right, Left, Right, B, A, Start,' Contra has become a legend in the world of gaming.",
        developer: "Konami",
        publisher: "Konami",
        price: 49.99,
        release_date: "February 20, 1987",
        featured: true,
        images: contra_images,
        language: ["Japanese", "English"]
      },
      {
        title: "Metroid",
        description: "Metroid is a sci-fi action-adventure game developed and published by Nintendo. Players control Samus Aran, a female bounty hunter, as she explores the mysterious planet Zebes, battles enemies, and uncovers secrets.",
        long_description: "Metroid is a groundbreaking game that introduced players to the atmospheric and immersive world of Samus Aran, a female bounty hunter. Released in 1986, Metroid combines side-scrolling action with exploration, creating a unique gameplay experience. Players take control of Samus as she navigates the treacherous planet Zebes, battling dangerous enemies and uncovering the secrets of the mysterious Metroids. The game's non-linear progression and interconnected world set new standards for exploration in video games. With its moody atmosphere, haunting soundtrack, and iconic gameplay mechanics, Metroid has become a beloved franchise that continues to captivate players to this day.",
        developer: "Nintendo R&D1",
        publisher: "Nintendo",
        price: 49.99,
        release_date: "August 6, 1986",
        featured: true,
        images: metroid_images,
        language: ["Japanese", "English"]
      },
      {
        title: "Castlevania",
        description: "Castlevania is a platformer-style action game developed and published by Konami. Players control Simon Belmont as he battles against the forces of evil, including the legendary vampire Dracula, in a quest to save Transylvania.",
        long_description: "Castlevania is a platformer-style action game that invites players to embark on a quest to save Transylvania from the clutches of the legendary vampire, Dracula. Released in 1987, the game follows the adventures of Simon Belmont, a vampire hunter armed with a whip and various sub-weapons. Players navigate through treacherous levels filled with monsters, traps, and challenging platforming sequences. Castlevania is renowned for its atmospheric gothic setting, tight controls, and memorable boss battles. With its blend of action, platforming, and horror elements, Castlevania has become a beloved franchise that has spawned numerous sequels and spin-offs.",
        developer: "Konami",
        publisher: "Konami",
        price: 49.99,
        release_date: "May 1, 1987",
        featured: true,
        images: castlevania_images,
        language: ["Japanese", "English"]
      },
      {
        title: "Final Fantasy",
        description: "Final Fantasy is a role-playing game developed and published by Square. Players control a group of heroes as they embark on a quest to save the world from destruction, battling against evil forces and discovering hidden secrets along the way.",
        long_description: "Final Fantasy is a role-playing game that takes players on an epic journey to save the world from impending doom. Released in 1987, this groundbreaking title introduced players to a rich and immersive fantasy world filled with magic, mythical creatures, and complex storytelling. In Final Fantasy, players control a group of heroes known as the Warriors of Light, who embark on a quest to restore balance and defeat the forces of evil threatening their world. The game features turn-based battles, character customization, and a deep leveling system that allows players to develop their characters' skills and abilities. With its captivating narrative, memorable characters, and iconic musical score, Final Fantasy has become one of the most influential RPG franchises in gaming history.",
        developer: "Square",
        publisher: "Square",
        price: 49.99,
        release_date: "December 18, 1987",
        featured: true,
        images: final_fantasy_images,
        language: ["Japanese", "English"]
      },
      {
        title: "Double Dragon",
        description: "Double Dragon is a side-scrolling beat 'em up game developed and published by Technos Japan. Players control brothers Billy and Jimmy Lee as they battle against street gangs and other enemies in a quest to rescue Billy's girlfriend Marian.",
        long_description: "Double Dragon is a side-scrolling beat 'em up game that became an instant hit upon its release in 1987. In the game, players assume the roles of Billy and Jimmy Lee, twin brothers skilled in martial arts, as they fight their way through the dangerous streets to rescue Billy's girlfriend, Marian, who has been kidnapped by a street gang. Players unleash a variety of punches, kicks, and special moves to defeat their enemies, all while collecting power-ups and weapons along the way. Double Dragon's cooperative multiplayer mode allowed players to team up and take on the challenges together, adding an extra layer of excitement and camaraderie. With its iconic characters, intense action, and memorable gameplay, Double Dragon left a lasting impact on the beat 'em up genre and became a beloved classic.",
        developer: "Technos Japan",
        publisher: "Technos Japan",
        price: 49.99,
        release_date: "June 1987",
        featured: true,
        images: double_dragon_images,
        language: ["Japanese", "English"]
      },
      {
        title: "Mega Man",
        description: "Mega Man is a side-scrolling action game developed and published by Capcom. Players control the robot hero Mega Man as he battles against Dr. Wily and his army of robot masters, using their unique abilities to overcome challenges and save the world.",
        long_description: "Mega Man, known as Rockman in Japan, is a side-scrolling action game that burst onto the gaming scene in 1987. Developed by Capcom, this iconic series introduced players to the robotic hero known as Mega Man, also called Rockman, who fights against the evil Dr. Wily and his army of Robot Masters. Players control Mega Man as he traverses through challenging levels, each guarded by a unique Robot Master, and defeat them to acquire their special abilities. With its tight controls, inventive level design, and memorable boss battles, Mega Man captured the hearts of players worldwide. The series' hallmark gameplay mechanic of acquiring new weapons and strategically using them against enemies became a staple of the franchise. Mega Man's popularity led to numerous sequels and spin-offs, solidifying its status as one of the most beloved and enduring franchises in gaming.",
        developer: "Capcom",
        publisher: "Capcom",
        price: 49.99,
        release_date: "December 17, 1987",
        featured: true,
        images: mega_man_images,
        language: ["Japanese", "English"]
      },
      {
        title: "Duck Hunt",
        description: "Duck Hunt is a light gun shooter game developed and published by Nintendo. Players use the NES Zapper to shoot ducks as they fly across the screen, with a hunting dog retrieving any that are hit. A classic of the NES era, Duck Hunt is best known for its charming gameplay and memorable sound effects.",
        long_description: "Duck Hunt is a light gun shooter game that quickly became a staple of the Nintendo Entertainment System (NES) when it was released in 1984. Developed and published by Nintendo, Duck Hunt utilizes the NES Zapper, a light gun peripheral, as the primary controller. Players aim and shoot at ducks that fly across the screen while being assisted by a trusty hunting dog that retrieves the fallen ducks. With its simple yet addictive gameplay, Duck Hunt provided hours of entertainment for players of all ages. The game's charming visuals, responsive controls, and iconic sound effects, including the dog's mocking laughter, have made it a nostalgic favorite among retro gaming enthusiasts. Duck Hunt remains a cherished title and a testament to the timeless appeal of classic arcade-style gaming.",
        developer: "Nintendo R&D1",
        publisher: "Nintendo",
        price: 29.99,
        release_date: "April 21, 1984",
        featured: true,
        images: duck_hunt_images,
        language: ["Japanese", "English"]
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
