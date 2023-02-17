import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGame } from '../../store/game'
import { NavLink } from 'react-router-dom';
import { createCartItem } from '../../store/cartItem';
import './GameShowPage.css'

function GameShowPage() {
    const dispatch = useDispatch();
    const { gameId } = useParams();

    const game = useSelector(state => state.games ? state.games[gameId] : {});
    useEffect(() => {
        dispatch(fetchGame(gameId));
    }, [gameId, dispatch])

    const handleAddToCart = () => {
        // debugger
        dispatch(createCartItem(game.id))
    }

    if (game === undefined) {
        return <>Still loading...</>
    } else {

    return (
        <div className="show-page">
            <div className="show-page-content">
                <div className="top-of-show-page">
                    <div className="show-page-pathing">
                        <NavLink className="link-to-home" exact to="/">All Games</NavLink>
                        {' >'} {game.title}
                    </div>
                    <div className="show-page-game-title">{game.title}</div>
                </div>

                <div className="game-media-and-summary">
                    <div className="highlights-carousel-container">
                        <img className="highlights-cont" src={game.images[1]} alt=""></img>

                        <div className="image-carousel">
                            <img className="show-page-carousel-images" src={game.images[2]} alt=""></img>
                            <img className="show-page-carousel-images" src={game.images[3]} alt=""></img>
                            <img className="show-page-carousel-images" src={game.images[4]} alt=""></img>
                            <img className="show-page-carousel-images" src={game.images[5]} alt=""></img>
                            <img className="show-page-carousel-images" src={game.images[6]} alt=""></img>
                        </div>

                        <div className="carousel-slider">
                            Slider Here
                        </div>
                    </div>

                    <div className="game-preview-container">
                        <img className="game-show-banner" src={game.images[0]} alt=""></img>
                        <div className="game-show-summary">{game.description}</div>
                        <div className="game-stats">
                            <div className="game-show-reviews">
                                <div className="subcolumn-title">ALL REVIEWS:</div>
                                <div className="subcolumn-content">
                                    <span className="rating-summary">Very Positive </span>
                                    <span className="total-reviews">(10)</span>
                                </div>
                            </div>

                            <div className="game-show-release-date">
                                <div className="subcolumn-title">RELEASE DATE:</div>
                                <div className="date">{game.releaseDate}</div>
                            </div>

                            <div className="developer-row">
                                <div className="subcolumn-title">DEVELOPER: </div>
                                <div className="subcolumn-content">{game.developer}</div>
                            </div>

                            <div className="developer-row">
                                <div className="subcolumn-title">PUBLISHER: </div>
                                <div className="subcolumn-content">{game.publisher}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="game-show-main-column">
                    <div className="game-show-main-left">
                        
                        <div className="game-purchase-container">
                            <div>Buy {game.title}</div>
                            <div className="game-purchase-block">
                                <div className="game-purchase-block-action">
                                    <div className="game-purchase-price">${game.price}</div>
                                    <button onClick={handleAddToCart} className="game-purchase-button">Add to Cart</button>
                                </div>
                            </div>
                        </div>

                        <div className="game-description">
                            <div className="description-header">ABOUT THIS GAME</div>
                        </div>

                    </div>

                    <div className="game-show-main-right">
                        Is this game relevant to you?
                    </div>

                </div>

                <div className="review-content">
                    <div className="game-show-reviews-column">
                        <div className="reviews-area">
                            <div className="game-show-average-reviews">Overall Reviews</div>
                            <div className="game-show-reviews-listed">
                                <div className="game-show-review-owner">Bob</div>
                                <div className="game-show-review-content">Review</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
}

export default GameShowPage