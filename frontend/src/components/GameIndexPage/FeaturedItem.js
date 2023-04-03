const FeaturedItem = ({ game }) => {
    return (
        <div>
            <img src={game.images[0]} />
            <h3>{game.title}</h3>
        </div>
    )
}

export default FeaturedItem