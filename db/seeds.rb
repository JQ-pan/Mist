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
    # ApplicationRecord.connection.reset_pk_sequence!('users')
    
    # For easy testing, so that after seeding, the first keys has `id` of 1
    ActiveRecord::Base.connection.tables.each do |t|
      ActiveRecord::Base.connection.reset_pk_sequence!(t)
    end

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

    super_mario_bros_images = [] 
    legend_of_zelda_images = [] 
    contra_images = [] 
    metroid_images = [] 
    castlevania_images = [] 
    final_fantasy_images = [] 
    double_dragon_images = [] 
    mega_man_images = [] 
    duck_hunt_images = []
    sonic_the_hedgehog_images = []
    street_fighter_2_images = []
    pac_man_images = []
    tetris_images = []
    pokemon_red_and_blue_images = []
    chrono_trigger_images = []
    diablo_images = []
    the_elder_scrolls_morrowind_images = []
    gran_turismo_images = []
    fallout_images = []
    soulcalibur_images = []
    the_secret_of_monkey_island = []
    goldeneye_007_images = []
    half_life_images = []

    8.times do |i|
      super_mario_bros_images << "https://mist-seeds.s3.amazonaws.com/super-mario-bros/super-mario-bros-#{i+1}.jpg"
    end

    8.times do |i|
      legend_of_zelda_images << "https://mist-seeds.s3.amazonaws.com/legend-of-zelda/legend-of-zelda-#{i+1}.jpg"
    end

    8.times do |i|
      contra_images << "https://mist-seeds.s3.amazonaws.com/contra/contra-#{i+1}.jpg"
    end

    8.times do |i|
      metroid_images << "https://mist-seeds.s3.amazonaws.com/metroid/metroid-#{i+1}.jpg"
    end

    8.times do |i|
      castlevania_images << "https://mist-seeds.s3.amazonaws.com/castlevania/castlevania-#{i+1}.jpg"
    end

    8.times do |i|
      final_fantasy_images << "https://mist-seeds.s3.amazonaws.com/final-fantasy/final-fantasy-#{i+1}.jpg"
    end

    8.times do |i|
      double_dragon_images << "https://mist-seeds.s3.amazonaws.com/double-dragon/double-dragon-#{i+1}.jpg"
    end

    8.times do |i|
      mega_man_images << "https://mist-seeds.s3.amazonaws.com/mega-man/mega-man-#{i+1}.jpg"
    end

    8.times do |i|
      duck_hunt_images << "https://mist-seeds.s3.amazonaws.com/duck-hunt/duck-hunt-#{i+1}.jpg"
    end
    
    8.times do |i|
      sonic_the_hedgehog_images << "https://mist-seeds.s3.amazonaws.com/sonic-the-hedgehog/sonic-the-hedgehog-#{i+1}.jpg"
    end

    8.times do |i|
      street_fighter_2_images << "https://mist-seeds.s3.amazonaws.com/street-fighter-ii/street-fighter-ii-#{i+1}.jpg"
    end

    8.times do |i|
      pac_man_images << "https://mist-seeds.s3.amazonaws.com/pac-man/pac-man-#{i+1}.jpg"
    end

    8.times do |i|
      tetris_images << "https://mist-seeds.s3.amazonaws.com/tetris/tetris-#{i+1}.jpg"
    end

    8.times do |i|
      pokemon_red_and_blue_images << "https://mist-seeds.s3.amazonaws.com/pokemon-red-and-blue/pokemon-red-and-blue-#{i+1}.jpg"
    end

    8.times do |i|
      chrono_trigger_images << "https://mist-seeds.s3.amazonaws.com/chrono-trigger/chrono-trigger-#{i+1}.jpg"
    end

    8.times do |i|
      diablo_images << "https://mist-seeds.s3.amazonaws.com/diablo/diablo-#{i+1}.jpg"
    end
    
    8.times do |i|
      the_elder_scrolls_morrowind_images << "https://mist-seeds.s3.amazonaws.com/elder-scrolls-morowind/elder-scrolls-morowind-#{i+1}.jpg"
    end

    8.times do |i|
      gran_turismo_images << "https://mist-seeds.s3.amazonaws.com/gran-turismo/gran-turismo-#{i+1}.jpg"
    end
    
    8.times do |i|
      fallout_images << "https://mist-seeds.s3.amazonaws.com/fallout/fallout-#{i+1}.jpg"
    end

    8.times do |i|
      soulcalibur_images << "https://mist-seeds.s3.amazonaws.com/chrono-trigger/chrono-trigger-#{i+1}.jpg"
    end
    
    8.times do |i|
      the_secret_of_monkey_island << "https://mist-seeds.s3.amazonaws.com/the-secret-of-the-monkey-island/the-secret-of-the-monkey-island-#{i+1}.jpg"
    end

    8.times do |i|
      goldeneye_007_images << "https://mist-seeds.s3.amazonaws.com/golden-eye-001/golden-eye-001-#{i+1}.jpg"
    end

    8.times do |i|
      half_life_images << "https://mist-seeds.s3.amazonaws.com/half-life/half-life-#{i+1}.jpg"
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
        language: ["Japanese", "English"],
        tag: ["Platformer"]
      },
      {
        title: "The Legend of Zelda",
        description: "The Legend of Zelda is an action-adventure game developed and published by Nintendo. Players control a young hero named Link as he travels through the land of Hyrule to rescue Princess Zelda and defeat the evil Ganon.",
        long_description: "The Legend of Zelda is a seminal game that revolutionized the action-adventure tag. First released in 1986, this game introduced players to a vast and immersive world known as Hyrule. As the courageous hero Link, players embark on an epic quest to rescue Princess Zelda and thwart the plans of the malevolent Ganon. The game is filled with intricate puzzles, challenging enemies, and memorable characters, all set in a beautifully designed fantasy realm. With its open-ended gameplay and non-linear exploration, The Legend of Zelda offers players a sense of freedom and discovery unlike anything else at the time. It remains a beloved and influential title in the gaming industry.",
        developer: "Nintendo R&D4",
        publisher: "Nintendo",
        price: 49.99,
        release_date: "February 21, 1986",
        featured: true,
        images: legend_of_zelda_images,
        language: ["Japanese", "English"],
        tag: ["Action-Adventure"]
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
        language: ["Japanese", "English"],
        tag: ["Run and Gun", "Action"]
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
        language: ["Japanese", "English"],
        tag: ["Sci-Fi", "Action-Adventure", "Platformer"]
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
        language: ["Japanese", "English"],
        tag: ["Platformer", "Action"]
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
        language: ["Japanese", "English"],
        tag: ["RPG"]
      },
      {
        title: "Double Dragon",
        description: "Double Dragon is a side-scrolling beat 'em up game developed and published by Technos Japan. Players control brothers Billy and Jimmy Lee as they battle against street gangs and other enemies in a quest to rescue Billy's girlfriend Marian.",
        long_description: "Double Dragon is a side-scrolling beat 'em up game that became an instant hit upon its release in 1987. In the game, players assume the roles of Billy and Jimmy Lee, twin brothers skilled in martial arts, as they fight their way through the dangerous streets to rescue Billy's girlfriend, Marian, who has been kidnapped by a street gang. Players unleash a variety of punches, kicks, and special moves to defeat their enemies, all while collecting power-ups and weapons along the way. Double Dragon's cooperative multiplayer mode allowed players to team up and take on the challenges together, adding an extra layer of excitement and camaraderie. With its iconic characters, intense action, and memorable gameplay, Double Dragon left a lasting impact on the beat 'em up tag and became a beloved classic.",
        developer: "Technos Japan",
        publisher: "Technos Japan",
        price: 49.99,
        release_date: "June 1987",
        featured: true,
        images: double_dragon_images,
        language: ["Japanese", "English"],
        tag: ["Action"]
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
        language: ["Japanese", "English"],
        tag: ["Action", "Platformer"]
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
        language: ["Japanese", "English"],
        tag: ["Light Gun Shooter", "Arcade"]
      },
      {
        title: "Sonic the Hedgehog",
        description: "Sonic the Hedgehog is a fast-paced platformer developed and published by Sega. Players control Sonic, a blue anthropomorphic hedgehog with incredible speed, as he races through vibrant levels to stop the evil Dr. Robotnik from collecting the Chaos Emeralds and conquering the world.",
        long_description: "Sonic the Hedgehog revolutionized platforming games with its speedy gameplay and vibrant aesthetics. Released in 1991, the game introduced players to the iconic Sonic, whose main ability is his incredible speed. Players dash through loop-de-loops, corkscrews, and ramps in levels filled with loops, jumps, and enemies. As Sonic, players thwart Dr. Robotnik's plans by freeing captured animals and collecting rings to maintain their health. With its memorable soundtrack and exhilarating gameplay, Sonic the Hedgehog became a cornerstone of gaming history, solidifying Sonic's place as Sega's mascot.",
        developer: "Sega",
        publisher: "Sega",
        price: 49.99,
        release_date: "June 23, 1991",
        featured: true,
        images: sonic_the_hedgehog_images,
        language: ["English", "Japanese"],
        tag: ["Platformer", "Action"]
      },
      {
        title: "Street Fighter II",
        description: "Street Fighter II is a legendary one-on-one fighting game developed and published by Capcom. Players choose from a diverse roster of fighters, each with unique moves, as they compete in a global martial arts tournament to determine the world's strongest fighter.",
        long_description: "Street Fighter II, released in 1991, is credited with popularizing the one-on-one fighting game genre. With characters like Ryu, Ken, and Chun-Li, each with their own fighting styles and special moves, players engage in intense battles across a variety of global locations. The game's competitive scene blossomed, sparking the birth of esports and widespread arcade culture. Its sequel's influence continues in the franchise's legacy, shaping the foundation of modern fighting games.",
        developer: "Capcom",
        publisher: "Capcom",
        price: 49.99,
        release_date: "February 6, 1991",
        featured: true,
        images: street_fighter_2_images,
        language: ["English", "Japanese"],
        tag: ["Fighting", "Arcade"]
      },
      {
        title: "Pac-Man",
        description: "Pac-Man is a classic arcade game developed by Namco. Players control Pac-Man, a round character that navigates mazes, eating dots while avoiding ghosts. The goal is to clear each level by eating all the dots and power pellets to temporarily turn the ghosts blue and eat them.",
        long_description: "Pac-Man, introduced in 1980, is a hallmark of arcade gaming. Players guide Pac-Man through mazes filled with dots while avoiding the colorful ghosts: Blinky, Pinky, Inky, and Clyde. Eating power pellets gives Pac-Man the ability to turn the tables and devour the ghosts. The game's simple yet addictive gameplay, along with its catchy music and iconic characters, made it a cultural phenomenon and one of the most recognizable games in history.",
        developer: "Namco",
        publisher: "Namco",
        price: 19.99,
        release_date: "May 22, 1980",
        featured: true,
        images: pac_man_images,
        language: ["English", "Japanese"],
        tag: ["Arcade", "Puzzle"]
      },
      {
        title: "Tetris",
        description: "Tetris is a puzzle game created by Alexey Pajitnov. Players arrange falling tetrominoes (shapes composed of four blocks) to create solid lines that disappear. The game speeds up as players progress, challenging their spatial and strategic skills.",
        long_description: "Tetris, launched in 1984, is a timeless puzzle game that transcends generations. Players manipulate falling tetrominoes to create complete lines, clearing them from the screen. The game's increasing speed and the need for quick decisions create a captivating experience. Tetris's simple yet addictive gameplay, along with its globally recognized theme music, have made it a cultural phenomenon.",
        developer: "Alexey Pajitnov",
        publisher: "Alexey Pajitnov",
        price: 29.99,
        release_date: "June 6, 1984",
        featured: true,
        images: tetris_images,
        language: ["English", "Japanese"],
        tag: ["Puzzle"]
      },
      {
        title: "Pokémon Red and Blue",
        description: "Pokémon Red and Blue are role-playing games developed by Game Freak and published by Nintendo. Players become Pokémon Trainers, capturing and training creatures called Pokémon to become the Pokémon Champion by battling other Trainers and collecting Gym Badges.",
        long_description: "Pokémon Red and Blue, released in 1996, marked the beginning of the Pokémon franchise. Players explore the fictional world of Kanto, capturing and training a variety of Pokémon creatures to become a Pokémon Master. With its trading and battling mechanics, as well as the challenge of completing the Pokédex, the games became a cultural sensation, spawning an enduring franchise across video games, TV shows, movies, and merchandise.",
        developer: "Game Freak",
        publisher: "Nintendo",
        price: 49.99,
        release_date: "September 28, 1998",
        featured: true,
        images: pokemon_red_and_blue_images,
        language: ["English", "Japanese"],
        tag: ["RPG", "Adventure"]
      },
      {
        title: "Chrono Trigger",
        description: "Chrono Trigger is a role-playing game developed and published by Square Enix. Players follow the adventures of Chrono and his friends as they travel through time to prevent an apocalyptic future caused by a mysterious entity known as Lavos.",
        long_description: "Released in 1995, Chrono Trigger is a masterpiece of storytelling and gameplay. With a unique time-traveling mechanic, players explore various eras, from the prehistoric to the distant future, meeting memorable characters and shaping the outcome of history. Its captivating narrative, memorable characters, and multiple endings make Chrono Trigger a timeless RPG that continues to be celebrated for its innovative mechanics and emotional depth.",
        developer: "Square Enix",
        publisher: "Square Enix",
        price: 49.99,
        release_date: "August 22, 1995",
        featured: true,
        images: chrono_trigger_images,
        language: ["English", "Japanese"],
        tag: ["RPG", "Time Travel"]
      },
      {
        title: "Diablo",
        description: "Diablo is an action RPG developed and published by Blizzard Entertainment. Players descend into the dark dungeons beneath the town of Tristram, battling hordes of demons and creatures to confront Diablo, the Lord of Terror.",
        long_description: "Diablo, released in 1996, introduced players to a dark and foreboding world plagued by demonic forces. Players choose from character classes and delve into procedurally generated dungeons filled with loot, monsters, and epic battles. Its dark atmosphere, loot-driven progression, and engaging multiplayer elements contributed to Diablo's enduring legacy, influencing the action RPG genre for years to come.",
        developer: "Blizzard Entertainment",
        publisher: "Blizzard Entertainment",
        price: 49.99,
        release_date: "December 31, 1996",
        featured: true,
        images: diablo_images,
        language: ["English"],
        tag: ["Action", "RPG", "Hack and Slash"]
      },
      {
        title: "The Elder Scrolls: Morrowind",
        description: "The Elder Scrolls III: Morrowind is an open-world RPG developed by Bethesda Game Studios. Set in the fantastical land of Vvardenfell, players embark on a journey filled with exploration, quests, and the unraveling of ancient prophecies.",
        long_description: "Released in 2002, Morrowind offered players an expansive open world with unprecedented freedom. The land of Vvardenfell is rich with lore, diverse landscapes, and intriguing characters. As the Nerevarine, players uncover political intrigue, engage in combat, and utilize the game's deep customization systems. Morrowind's immersive world and intricate storytelling contributed to the lasting success of The Elder Scrolls series.",
        developer: "Bethesda Game Studios",
        publisher: "Bethesda Softworks",
        price: 29.99,
        release_date: "May 1, 2002",
        featured: true,
        images: the_elder_scrolls_morrowind_images,
        language: ["English"],
        tag: ["RPG", "Open World"]
      },
      {
        title: "Gran Turismo",
        description: "Gran Turismo is a racing simulation game developed by Polyphony Digital. Players experience the thrill of realistic car racing, from tuning and customizing vehicles to competing in various races and challenges.",
        long_description: "Introduced in 1997, Gran Turismo set a new standard for racing simulations. Players are offered an extensive collection of meticulously modeled cars and a range of tracks to master. The game's attention to detail, including vehicle physics and handling, drew racing enthusiasts into a virtual world of speed and competition. With its realistic approach and focus on authenticity, Gran Turismo became a landmark in the racing game genre.",
        developer: "Polyphony Digital",
        publisher: "Sony Computer Entertainment",
        price: 49.99,
        release_date: "May 8, 1998",
        featured: true,
        images: gran_turismo_images,
        language: ["English", "Japanese"],
        tag: ["Racing", "Simulation"]
      },
      {
        title: "Fallout",
        description: "Fallout is a post-apocalyptic RPG developed by Interplay Entertainment. Set in an alternate future after a nuclear war, players navigate the wasteland, making choices that affect the fate of various factions and settlements.",
        long_description: "Released in 1997, Fallout's retro-futuristic setting, dark humor, and branching narratives set it apart. As the Vault Dweller, players explore the ruined landscapes, engage in turn-based combat, and make morally complex decisions. Fallout's unique blend of RPG elements and its exploration of the consequences of humanity's actions in the face of catastrophe make it a standout title in the post-apocalyptic genre.",
        developer: "Interplay Entertainment",
        publisher: "Interplay Entertainment",
        price: 49.99,
        release_date: "September 30, 1997",
        featured: true,
        images: fallout_images,
        language: ["English"],
        tag: ["RPG", "Post-Apocalyptic"]
      },
      {
        title: "Soulcalibur",
        description: "Soulcalibur is a 3D weapon-based fighting game developed and published by Namco. Players engage in fast-paced battles using a diverse roster of characters, each wielding unique weapons, in their quest to obtain the legendary Soul Edge sword.",
        long_description: "Originally released in arcades in 1995, Soulcalibur set a new standard for 3D fighting games. With its precise controls, stunning graphics, and weapon-focused combat system, players engage in dynamic battles where each character's weapon style influences their playstyle. The game's deep mechanics and intricate storylines have made it a cornerstone of the fighting game community.",
        developer: "Namco",
        publisher: "Namco",
        price: 49.99,
        release_date: "December 20, 1995",
        featured: true,
        images: soulcalibur_images,
        language: ["English", "Japanese"],
        tag: ["Fighting", "Arcade"]
      },
      {
        title: "The Secret of Monkey Island",
        description: "The Secret of Monkey Island is a comedic point-and-click adventure game developed and published by Lucasfilm Games. Players assume the role of Guybrush Threepwood, an aspiring pirate, as he embarks on a humorous and swashbuckling journey to rescue the governor and uncover the mysteries of Monkey Island.",
        long_description: "Released in 1990, The Secret of Monkey Island introduced players to a world of humor, wit, and memorable characters. With its charming art style, witty dialogue, and challenging puzzles, players navigate through a colorful pirate-infested world. Guybrush's quest to prove himself as a pirate and win the heart of the governor has captivated gamers with its engaging story and comedic narrative.",
        developer: "Lucasfilm Games",
        publisher: "Lucasfilm Games",
        price: 49.99,
        release_date: "October 1990",
        featured: true,
        images: the_secret_of_monkey_island,
        language: ["English"],
        tag: ["Adventure", "Point-and-Click"]
      },
      {
        title: "GoldenEye 007",
        description: "GoldenEye 007 is a first-person shooter based on the James Bond film of the same name. Developed by Rare and published by Nintendo, players step into the shoes of secret agent James Bond as they navigate through various missions, engaging in stealth, action, and espionage.",
        long_description: "Released in 1997, GoldenEye 007 redefined the first-person shooter genre on consoles. With its engaging single-player campaign and highly praised multiplayer mode, players engaged in intense battles set within iconic locations from the film. The game's influence on console FPS gaming and its legacy as a classic multiplayer experience have solidified its place in gaming history.",
        developer: "Rare",
        publisher: "Nintendo",
        price: 49.99,
        release_date: "August 25, 1997",
        featured: true,
        images: goldeneye_007_images,
        language: ["English"],
        tag: ["First-Person Shooter", "Action"]
      },
      {
        title: "Half-Life",
        description: "Half-Life is a groundbreaking first-person shooter developed by Valve. Players take on the role of Gordon Freeman, a scientist thrust into a chaotic situation at the Black Mesa Research Facility, as they uncover a mysterious interdimensional rift and battle hostile alien creatures.",
        long_description: "Released in 1998, Half-Life transformed the FPS genre with its immersive storytelling, intelligent AI, and seamless narrative delivery. The game's emphasis on environmental storytelling and exploration, combined with its innovative physics and weapons, marked a new era in narrative-driven shooters. Its impact on game design, modding, and storytelling techniques remains influential to this day.",
        developer: "Valve",
        publisher: "Sierra Studios",
        price: 49.99,
        release_date: "November 19, 1998",
        featured: true,
        images: half_life_images,
        language: ["English"],
        tag: ["First-Person Shooter", "Sci-Fi"]
      }#,
      # {
      #   title: "",
      #   description: "",
      #   long_description: "",
      #   developer: "",
      #   publisher: "",
      #   price: 29.99,
      #   release_date: "",
      #   featured: true,
      #   images: ,
      #   language: [""],
      #   tag: [""]
      # }
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
