import { useState } from "react";
import { Link } from "react-router-dom";
import './FeaturedItem.css';

const FeaturedItem = ({ game, isActive }) => {
    const [index, setIndex] = useState(0);
    const imageUrls = game.images.slice(1) || [];

    const handleMouseEnter = index => {
        if (isActive) {
            setIndex(index);
        }
    }
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

    return (
        <Link className="featured-container" exact to={`/${game.id}`}>
            <div className="main-image-container">
                {mainImage}
            </div>
            <div className="featured-info">
                <div className="featured-game-title">
                    <h3>{game.title}</h3>
                </div>
                <div className="featured-image-container">
                    {sideImages}
                </div>
            </div>

            <div className="featured-price">
                {game.price}
            </div>
        </Link>
    )
}

export default FeaturedItem