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
        images: ["https://mario.wiki.gallery/images/c/c1/SMB_Logo_EN.png", "https://townsquare.media/site/295/files/2020/09/super-mario-bros.jpg?", "https://m.media-amazon.com/images/M/MV5BNDQzMDgwYTktNTYyOC00OThkLTkyMTgtOTI3ZjQzMGUzYmE0XkEyXkFqcGdeQXVyMTM0NjI3MTc0._V1_.jpg", "https://charactersdb.com/wp-content/uploads/nes-super-mario-game-characters.jpg", "https://m.media-amazon.com/images/M/MV5BMjEyZTBhM2MtMDE1NS00MzhiLWJjMTUtYjMwNGYxYTZiYWFkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjg3MTAzODM@._V1_.jpg", "https://www.bestoldgames.net/img/games/super-mario-bros/super-mario-bros-05.png", "https://static.wikia.nocookie.net/mario/images/4/44/SMB_Warpzone.png/revision/latest/scale-to-width-down/250?cb=20200331123731"]
      },
      {
        title: "The Legend of Zelda",
        description: "The Legend of Zelda is an action-adventure game developed and published by Nintendo. Players control a young hero named Link as he travels through the land of Hyrule to rescue Princess Zelda and defeat the evil Ganon.",
        developer: "Nintendo R&D4",
        publisher: "Nintendo",
        price: 49.99,
        release_date: "February 21, 1986",
        featured: true,
        images: ["https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda/2/28/Ign_loz_main_logo.jpg?width=960", "https://cdn.wallpapersafari.com/5/7/PFBQnm.jpg", "http://images6.fanpop.com/image/photos/34500000/The-Legend-of-Zelda-1986-the-legend-of-zelda-34558538-640-480.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Legend_of_Zelda_NES.PNG/220px-Legend_of_Zelda_NES.PNG", "https://www.zeldadungeon.net/Zelda01/Walkthrough/01/001.png", "https://i0.wp.com/www.thexboxhub.com/wp-content/uploads/2021/02/the-legend-of-zelda-3.png", "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-legend-of-zelda/1/10/Link_triforce.png"]
      },
      {
        title: "Contra",
        description: "Contra is a run and gun action game developed and published by Konami. Players control soldiers Bill Rizer and Lance Bean as they battle against alien forces and save the world from destruction.",
        developer: "Konami",
        publisher: "Konami",
        price: 49.99,
        release_date: "February 20, 1987",
        featured: true,
        images: ["https://staticr1.blastingcdn.com/media/photogallery/2017/4/19/660x290/b_502x220x82/konami-contra-ixnite-ixnitecom_1281189.jpg", "https://i.pinimg.com/736x/75/e9/1e/75e91e6d43b2f45ce72ec7b309be01d9.jpg", "https://static.fandomspot.com/images/04/13916/06-contra-game-screenshot.jpg", "http://static1.squarespace.com/static/5411df7ee4b01dce1367679d/543c80bde4b046a73f73fbf9/5534d5e8e4b0f265ff2a0d1f/1429525992623/Hearts_Contra--article_image.jpg", "http://static1.squarespace.com/static/5411df7ee4b01dce1367679d/543c80bde4b046a73f73fbf9/5534d5e8e4b0f265ff2a0d1d/1429525992357/Contra_-_NES_-_Energy_Zone.png", "https://i.pinimg.com/originals/78/56/72/7856725eea77fbbf1aad11d1cfe37aed.jpg", "https://preview.redd.it/castlevania-1986-vs-contra-1987-which-game-was-more-popular-v0-rple9h07fq3a1.jpg?width=1438&format=pjpg&auto=webp&s=e0a19fa4311949d58ff38a0066a128c7b10bcaf4"]
      },
      {
        title: "Metroid",
        description: "Metroid is a sci-fi action-adventure game developed and published by Nintendo. Players control Samus Aran, a female bounty hunter, as she explores the mysterious planet Zebes, battles enemies, and uncovers secrets.",
        developer: "Nintendo R&D1",
        publisher: "Nintendo",
        price: 49.99,
        release_date: "August 6, 1986",
        featured: true,
        images: ["https://static.wikia.nocookie.net/metroid/images/0/0d/M1_logo_EN.png/", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ce15dc30-73ef-4c42-8e92-206d5fa25845/defc7cj-0d2d5841-e38b-48de-b286-21ae1cbda2c7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NlMTVkYzMwLTczZWYtNGM0Mi04ZTkyLTIwNmQ1ZmEyNTg0NVwvZGVmYzdjai0wZDJkNTg0MS1lMzhiLTQ4ZGUtYjI4Ni0yMWFlMWNiZGEyYzcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5jJKE8X1z2JdMvEbVVSWUk7RL-aCevSMVwIEdSoFrZk", "https://cdn.vox-cdn.com/thumbor/lHFB0iP_vqWzUwsSYazkKF7VkvI=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13712815/04_fusion.png", "https://m.media-amazon.com/images/M/MV5BY2RkYTM5YzAtODdiZC00M2JjLWEwMGQtMWRhMmM5MDc2MGE0XkEyXkFqcGdeQXVyNTY0MDIzNzM@._V1_.jpg", "https://i.redd.it/vkf6imxq6q081.png", "https://asset.vg247.com/metroid_fusion_minecraft.jpg/BROK/thumbnail/1600x900/quality/100/metroid_fusion_minecraft.jpg", "https://cdn.vox-cdn.com/thumbor/zlxV-TDiMg93x-1LYBGf2VAcZ9E=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22908786/metroid_fusion.JPG"]
      },
      {
        title: "Castlevania",
        description: "Castlevania is a platformer-style action game developed and published by Konami. Players control Simon Belmont as he battles against the forces of evil, including the legendary vampire Dracula, in a quest to save Transylvania.",
        developer: "Konami",
        publisher: "Konami",
        price: 49.99,
        release_date: "May 1, 1987",
        featured: true,
        images: ["https://upload.wikimedia.org/wikipedia/commons/1/15/Castlevania_logo.png", "https://static.tvtropes.org/pmwiki/pub/images/castlevania_i_art.jpg", "https://25yearslatersite.com/wp-content/uploads/2019/08/StopWatch05-700x337.jpg", "https://www.oldgamehermit.com/wp-content/uploads/2012/10/cv1.png", "https://c8.alamy.com/comp/2CE283Y/castlevania-nintendo-entertainment-system-nes-videogame-editorial-use-only-2CE283Y.jpg", "http://4.bp.blogspot.com/_zPd4lDJbqF0/TKfMYMSf1cI/AAAAAAAABaI/V2aAYmINymE/s1600/Castlevania+1_002.png", "https://images.squarespace-cdn.com/content/v1/551a19f8e4b0e8322a93850a/2644f642-3ae2-422f-b574-a3e5e62945ac/Mockup_1_3_L.png"]
      },
      {
        title: "Final Fantasy",
        description: "Final Fantasy is a role-playing game developed and published by Square. Players control a group of heroes as they embark on a quest to save the world from destruction, battling against evil forces and discovering hidden secrets along the way.",
        developer: "Square",
        publisher: "Square",
        price: 49.99,
        release_date: "December 18, 1987",
        featured: true,
        images: ["https://static.wikia.nocookie.net/finalfantasy/images/c/c7/FFI_logo.png/", "https://appadvice.com/cdn-cgi/mirage/515c3b625b3744c20fadd87a6030cef13258ceb8e82375aec952d9a51cc51390/1280/https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/77/bd/21/77bd21b7-52d3-f935-68c2-6224551eb6be/pr_source.jpg/750x750bb.jpeg", "https://cdn.vox-cdn.com/thumbor/yEbvbDATu79HHMHgcir7ooHxc40=/0x0:600x337/1200x800/filters:focal(394x90:490x186)/cdn.vox-cdn.com/uploads/chorus_image/image/69526273/ffantasy.0.jpg", "https://cdn.vox-cdn.com/thumbor/HCEumGKcmUJDVz3KWSGorrsBWjs=/0x0:1920x1080/1400x933/filters:focal(807x387:1113x693):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/69797674/ply_210827_ecl1124_final_fantasy_1.0.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBj8hyYq4Y8hpvrviEISNFX8U0wqiztpHaQ&usqp=CAU", "https://i.ytimg.com/vi/CNKDTMwn_58/maxresdefault.jpg", "https://cdn.akamai.steamstatic.com/steam/apps/1173770/ss_270e296a9a7eb3d385eee10b5457b3529d793f78.1920x1080.jpg?t=1646929110"]
      },
      {
        title: "Double Dragon",
        description: "Double Dragon is a side-scrolling beat 'em up game developed and published by Technos Japan. Players control brothers Billy and Jimmy Lee as they battle against street gangs and other enemies in a quest to rescue Billy's girlfriend Marian.",
        developer: "Technos Japan",
        publisher: "Technos Japan",
        price: 49.99,
        release_date: "June 1987",
        featured: true,
        images: ["https://www.arcadeclub.co.uk/cdn/game-library/double-dragon/title/double-dragon-title.jpg", "http://static1.squarespace.com/static/5411df7ee4b01dce1367679d/543c80bde4b046a73f73fbf9/54b3ef4de4b0c67d15b1a740/1421078350495//img.jpg", "https://ucmgamestudies2017.files.wordpress.com/2017/05/99d5e-mega_man_2528nes2529_08.png", "http://static1.squarespace.com/static/5411df7ee4b01dce1367679d/543c80bde4b046a73f73fbf9/54b3ef4de4b0c67d15b1a740/1421078350495//img.jpg", "https://abadeducation.files.wordpress.com/2010/10/05-14-2007-doubledragon_abobo.jpg?w=300", "https://i.987967.xyz/previews/ddragon.png", "https://assets.reedpopcdn.com/double-dragon-remains-an-arcade-icon-1407494189595.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/double-dragon-remains-an-arcade-icon-1407494189595.jpg"]
      },
      {
        title: "Mega Man",
        description: "Mega Man is a side-scrolling action game developed and published by Capcom. Players control the robot hero Mega Man as he battles against Dr. Wily and his army of robot masters, using their unique abilities to overcome challenges and save the world.",
        developer: "Capcom",
        publisher: "Capcom",
        price: 49.99,
        release_date: "December 17, 1987",
        featured: true,
        images: ["https://64.media.tumblr.com/tumblr_m9dpjoxsP31rck6fwo1_1280.jpg", "https://i.guim.co.uk/img/static/sys-images/Observer/Pix/pictures/2010/3/4/1267726317117/Mega-Man-10-a-classic-tit-001.jpg?width=465&quality=85&dpr=1&s=none", "https://upload.wikimedia.org/wikipedia/en/4/45/NES_Mega_Man.png", "https://i.ytimg.com/vi/7UOFc8PWDXM/maxresdefault.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMsCh6eKHRj8wShtP_WMVQj0oDNzcYfWF4JbRtsGlSlG4eLSiq-TiN8-pml3CX0Pcue_o&usqp=CAU", "https://www.heypoorplayer.com/wp-content/uploads/2017/06/Mega-Man-3-Proto-Man.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6iLaYrMsyo1a1CQoJQji1LmqsGZzZHSdN-hZcyzxKrUqgrjorfWnZY_9ZkVEHft-bLyU&usqp=CAU"]
      },
      {
        title: "Duck Hunt",
        description: "Duck Hunt is a light gun shooter game developed and published by Nintendo. Players use the NES Zapper to shoot ducks as they fly across the screen, with a hunting dog retrieving any that are hit. A classic of the NES era, Duck Hunt is best known for its charming gameplay and memorable sound effects.",
        developer: "Nintendo R&D1",
        publisher: "Nintendo",
        price: 29.99,
        release_date: "April 21, 1984",
        featured: true,
        images: ["https://static.wikia.nocookie.net/siivagunner/images/7/79/Duck_Hunt.jpg", "https://i.pinimg.com/originals/e4/70/0d/e4700d0c7fb740c383aee684d0f94d15.jpg", "https://www.giantbomb.com/a/uploads/original/16/164924/2702414-9928126928-rxDit.jpg", "https://static.wikia.nocookie.net/ultimatepopculture/images/c/c8/Vs_Duck_Hunt.jpg/revision/latest?cb=20190929213334", "https://i.pinimg.com/originals/27/7a/3b/277a3b6abf26be8fef1a54a23586b9f7.png", "https://www.thexboxhub.com/wp-content/uploads/2022/05/hunt-ducks-ii-review-1.jpg", "https://d29xot63vimef3.cloudfront.net/image/nes-games/235-1.jpg"]
      }
    ]
    )
    puts "Done!"
  end