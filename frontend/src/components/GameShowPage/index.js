import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchGame } from '../../store/game'
import { NavLink, Link } from 'react-router-dom';
import { fetchCartItems, createCartItem } from '../../store/cartItem';
import { fetchLibraryItems } from '../../store/libraryItem';
import { fetchReviews } from '../../store/review';
import { fetchUsers } from "../../store/users";
import StoreNavigation from '../StoreNavigation';
import GameShowCarousel from './GameShowCarousel';
import Reviews from '../Reviews';
import ReviewForm from '../Reviews/ReviewForm';
import './GameShowPage.css';

function GameShowPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { gameId } = useParams();

    useEffect(() => {
        dispatch(fetchGame(gameId));
        dispatch(fetchUsers());
        dispatch(fetchLibraryItems());
        dispatch(fetchCartItems());
        dispatch(fetchReviews(gameId));
    }, [dispatch, gameId])

    const game = useSelector(state => state.games ? state.games[gameId] : {});

    const languages = game ? game.language.map((language) => (
        <tr style={{}} className="">
            <td style={{ width: '94px', textAlign: 'left' }} className="ellipsis">
                {language}			</td>
            <td className="checkcol">
                <span>✔</span> 				</td>
            <td className="checkcol">
                <span>✔</span> 				</td>
            <td className="checkcol">
                <span>✔</span> 				</td>
        </tr>
    )) : [];


    const reviewsArray = useSelector(state => state.reviews ? Object.values(state.reviews).filter(
        (review) => review.gameId === game.id
    ) : []);

    const count = reviewsArray.reduce((acc, review) => {
        if (review.recommended) {
            acc.trueCount++;
        } else {
            acc.falseCount++;
        }
        return acc;
    }, { trueCount: 0, falseCount: 0 });

    const ratio = count.trueCount / reviewsArray.length;

    let averageRating;
    if (ratio < 0.19) {
        averageRating = "Negative";
    } else if (ratio < 0.39) {
        averageRating = "Mostly Negative";
    } else if (ratio < 0.69) {
        averageRating = "Mixed";
    } else if (ratio < 0.79) {
        averageRating = "Mostly Positive";
    } else {
        averageRating = "Positive";
    }

    const handleAddToCart = () => {
        dispatch(createCartItem(game.id))
            .then(history.push('/cart'))
    }

    const handleInCart = () => {
        history.push('/cart');
    }

    // check if the game is already in the cart or in the library

    const cartItemsArray = useSelector(state => state.cartItems ? Object.values(state.cartItems) : []);
    const libraryItemsArray = useSelector(state => state.libraryItems ? Object.values(state.libraryItems) : []);

    const gameInCart = cartItemsArray?.some(cartGame => cartGame.id === game.id);
    const gameInLibrary = libraryItemsArray?.some(libraryGame => libraryGame.id === game.id);
    let addToCartButton;

    if (gameInCart) {
        addToCartButton = (
            <div className="add-to-cart-action" onClick={handleInCart}>
                <span>In Cart</span>
            </div>)
    } else if (gameInLibrary) {
        addToCartButton = (
            <div className="add-to-cart-action">
                <span>In Library</span>
            </div>
        )
    } else {
        addToCartButton = (
            <div className="add-to-cart-action" onClick={handleAddToCart}>
                <span>Add to Cart</span>
            </div>)
    }

    const reviewBox = gameInLibrary ? <ReviewForm game={game} /> : null;

    (<div className="add-to-cart-action" onClick={handleAddToCart}>
        <span>Add to Cart</span>
    </div>)

    if (game === undefined) {
        return <> Still loading... </>
    } else {
        return (
            <div className="show-page">
                <StoreNavigation />
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
                            <GameShowCarousel game={game} key={game.id} />
                        </div>

                        <div className="game-preview-container">
                            <img className="game-show-banner" src={game.images[0]} alt=""></img>
                            <div className="game-show-summary">{game.description}</div>
                            <div className="game-stats">
                                <div className="game-show-reviews">
                                    <div className="subcolumn-title">ALL REVIEWS:</div>
                                    <div className="subcolumn-content">
                                        <span className="rating-summary" style={{
                                            color:
                                                averageRating === "Negative" ? "#c35c2c" :
                                                    averageRating === "Mostly Negative" ? "#c35c2c" :
                                                        averageRating === "Mixed" ? "#a8926a" :
                                                            averageRating === "Mostly Positive" ? "#66C0F4" : "#66C0F4"
                                        }}>{averageRating}</span>
                                        <span className="total-reviews"> ({reviewsArray.length})</span>
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

                            <div className="tags-row">
                                <div className="tags-title">Popular user-defined tags for this product:</div>
                                <div className="tags-content">{game.tag.map((tag, i) =>
                                    <Link className="tag-link" key={i} exact to={`/${tag.toLowerCase().replace(/ /g, '-')}`}>
                                        {tag}
                                    </Link>
                                )}</div>
                            </div>

                        </div>
                    </div>

                    {reviewBox}

                    <div className="game-show-main-column">

                        <div className="game-show-main-left">
                            <div className="game-purchase-container">
                                <div className="game-purchase-content">

                                    <div className="purchase-text">Buy {game.title}</div>

                                    <div className="game-purchase-block">

                                        <div className="game-purchase-block-background">

                                            <div className="game-purchase-price">${game.price}</div>

                                            <div className="add-to-cart-button">
                                                {addToCartButton}
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="game-description">
                                <h2>About this game</h2>
                                <div className="description-content">{game.longDescription}</div>
                            </div>

                        </div>

                        <div className="game-show-main-right">
                            <div className="right-block languages">
                                <div id="language-header">
                                    Languages:
                                </div>
                                <div id="language-table">
                                    <table className="game_language_options" cellPadding="0" cellSpacing="0">
                                        <tbody><tr>
                                            <th style={{ width: '94px' }}></th>
                                            <th className="checkcol">Interface</th>
                                            <th className="checkcol">Full Audio</th>
                                            <th className="checkcol">Subtitles</th>
                                        </tr>

                                            {languages}

                                        </tbody></table>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="review-content">
                        <div className="game-show-reviews-column">
                            <div className="reviews-area">
                                <div className="game-show-reviews-listed">
                                    <div className="game-show-review-content">
                                        <Reviews game={game} reviewsArray={reviewsArray} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameShowPage