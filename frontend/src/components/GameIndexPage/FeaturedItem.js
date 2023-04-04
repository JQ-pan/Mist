import './FeaturedItem.css'

const FeaturedItem = ({ game }) => {
    return (
        <div className="featured-container">
            <img className="main-image" src={game.images[0]} alt="" />
            <div className="featured-info">
                
                <h3>{game.title}</h3>
            </div>
        </div>
    )
}

export default FeaturedItem