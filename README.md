# Welcome to **Mist**
_Welcome to Mist, your one-stop destination for all things gaming – from discovering and purchasing games to sharing reviews._

Mist [(live link)](https://mist.onrender.com/) is a homage to the video game distribution system known as Steam, which was developed by Valve Corporation. Instead of modern video games, I have opted to use Nintendo Entertainment System games which were some of the most popular arcade games in the early 1980s.

## Technologies used
- React with Redux: Handles data on frontend and renders components
- Ruby on Rails: Backend for data
- PostgresQL: Database
- AWS S3: Cloud storage for images
- CSS: Styling
- onRender: Hosting service

## Featured Carousel

The most prominent feature in this application is the Featured & Recommended carousel on the home page.

Each slide of the carousel displays images and text that are relevant to one game including one main image and four game screenshots

![Carousel gif](/readme_assets/Carousel-gif.gif "Carousel")

Instead of using a carousel library online, I decided to build it from scratch to practice my skills in React using functional components and hooks. 

```js
// components/GameIndexPage/Featured.js
const Featured = ({ games }) => {
    const [counter, setCounter] = useState(1);
    const [pause, setPause] = useState(false);

    // Handles the right arrow onClick
    const handleNext = () => {
        if (counter !== games.length) {
            setCounter(counter + 1);
        } else {
            setCounter(1);
        }
    };

    // Handles the left arrow onClick
    const handlePre = () => {
        if (counter !== 1) {
            setCounter(counter - 1);
        } else {
            setCounter(games.length);
        }
    };

    // Handles clicking on nubs corresponding with slide index
    const handlePage = page => {
        setCounter(page);
    };

    return (
        // Carousel is rendered with a list of nubs directly underneath
        {games.map((game, i) =>
            <div key={i} className={counter - 1 === i ? "show" : "not-show"}>
                <FeaturedItem key={i} game={game} isActive={counter - 1 === i} />
            </div>
        )}

        {games.map((game, i) => (
            <span key={i} className={counter - 1 === i ? "dot displayed" : "dot"} onClick={() => handlePage(i + 1)} />
        ))}

    )
```



```js
// components/GameIndexPage/FeaturedItem.js
const FeaturedItem = ({ game, isActive }) => {
    const [index, setIndex] = useState(0);
    const imageUrls = game.images.slice(1) || [];

    // Handle mouse events listens for the user's mouse hovering over one of the side images in order to render it on the main image container
    const handleMouseEnter = index => {
        if (isActive) {
            setIndex(index);
        }
    }

    // When the user's mouse leaves, render the default main image instead.
    const handleMouseLeave = () => {
        if (isActive) {
            setIndex(0);
        }
    }

    const mainImage = imageUrls.map((img, i) => {
        return (
            <img
                key={i}
                className={index === i ? "main-image show-slide" : "main-image not-show-slide"} 
                src={imageUrls[i]} alt="" />
        )
    })

    const sideImages = imageUrls.slice(1, 5).map((imageUrl, i) => {
        return (
            <div key={i}>
                <img
                    className="side-image" 
                    src={imageUrl} alt="" 
                    onMouseEnter={() => handleMouseEnter(i + 1)}
                    onMouseLeave={() => handleMouseLeave()}
                />
            </div>
        )
    })
```

## Game Show Carousel
![Game Carousel](/readme_assets/Game-show-page-carousel.gif "Game Carousel")

## Library
![Library Screenshot](/readme_assets/library_screenshot.PNG "Library")

## Shopping cart
![Shopping cart](/readme_assets/shopping_cart_screenshot.PNG "Shopping Cart")

## Categories

# To do / future features
- Mobile / Smaller Screens
- Rating other user's reviews
- User profile page, adding friends, user search
- Video game categories and tags
- Sales deals for games