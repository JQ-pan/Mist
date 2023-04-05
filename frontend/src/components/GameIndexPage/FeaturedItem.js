import './FeaturedItem.css';

const FeaturedItem = ({ game }) => {
    return (
        <div className="featured-container">
            <img className="main-image" src={game.images[0]} alt="" />
            <div className="featured-info">
                <div className="featured-game-title">
                    <h3>{game.title}</h3>
                </div>
                <div className="featured-image-container">
                    <div><img className="side-image" src={game.images[1]} alt="" /></div>
                    <div><img className="side-image" src={game.images[2]} alt="" /></div>
                    <div><img className="side-image" src={game.images[3]} alt="" /></div>
                    <div><img className="side-image" src={game.images[4]} alt="" /></div>
                </div>
            </div>

            <div className="featured-price">
                {game.price}
            </div>
        </div>
    )
}

export default FeaturedItem