import { useState } from "react";
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
            <img className={index === i ? "main-image show-slide" : "main-image not-show-slide"} src={imageUrls[i]} alt="" />
        )
    })

    const sideImages = imageUrls.slice(1, 5).map((img, i) => {
        return (
            <div>
                <img 
                    className="side-image" 
                    src={img} alt="" 

                    onMouseEnter={() => handleMouseEnter(i + 1)}
                    onMouseLeave={() => handleMouseLeave()}
                />
            </div>
            )
    })

    return (
        <div className="featured-container">
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
        </div>
    )
}

export default FeaturedItem