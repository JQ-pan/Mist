import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGames } from '../../store/game';
import { fetchAllReviews } from '../../store/review';
import StoreNavigation from '../StoreNavigation';
import GenreCarousel from './GenreCarousel';
import './GameGenrePage.css';

const GameGenrePage = () => {
    const dispatch = useDispatch();
    const { genre } = useParams();

    useEffect(() => {
        dispatch(fetchGames());
        dispatch(fetchAllReviews());
    }, [dispatch, genre])

    const games = useSelector(state => Object.values(state.games).filter(game => game.tag.some(tag => tag.toLowerCase().replace(/ /g, '-') === genre)))

    const [index, setIndex] = useState(0);
    const featuredGame = games[index];

    const increment = () => {
        index === games.length - 1? setIndex(0) : setIndex(index + 1);
    }

    const decrement = () => {
        index === 0 ? setIndex(games.length - 1) : setIndex(index - 1);
    }

    if (!games.length) {
        return <>Loading</>
    }

    return games && <div>
        <StoreNavigation id="category-navbar"/>
        <div id="page-background"></div>
        <div id="category-background" 
            style={{
                backgroundImage: `url(${featuredGame.images[0]})`
            }}
            >
        </div>
        <div className="carousel-container">
            <div className="category-carousel-title">{genre}</div>
            <div className="category-carousel-content">
                <img className="slide-image" src={featuredGame.images[0]} alt=""/>
                <div className="category-featured-content">
                    <div className="category-featured-info">
                        <div className="category-featured-title">
                            {featuredGame.title}
                        </div>
                        <div className="category-featured-release-date">
                            {featuredGame.releaseDate}
                        </div>
                        <div className="category-featured-rating-container">
                            <div className="category-featured-rating-content">
                                Very Positive <span> | 231,560 User Reviews </span>
                            </div>
                        </div>
                    </div>
                    <div className="category-featured-tag-box">
                        {featuredGame.tag.map(tag => <div className="category-featured-tags">{tag}</div>)}
                    </div>
                    <div className="category-featured-info-box">
                        {featuredGame.description}
                    </div>
                </div>
                <button className="previous" onClick={decrement}>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50px" height="100px" viewBox="0 0 50 100">
                        <polygon fill="#ffffff" points="0,0.093 0,25.702 24.323,50.026 0,74.349 0,99.955 49.929,50.026 "></polygon>
                    </svg>
                </button>
                <button className="next" onClick={increment}>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50px" height="100px" viewBox="0 0 50 100">
                        <polygon fill="#ffffff" points="0,0.093 0,25.702 24.323,50.026 0,74.349 0,99.955 49.929,50.026 "></polygon>
                    </svg>
                </button>
            </div>
        </div>
        <div className="carousel-pip-scroller-container">
            <div className="pip-scroller">
                <div className="pip-scroller-background"></div>
                <div className="pip-scroller-foreground" style={{left: `${100*(index)/games.length}%`, right: `${100*((games.length - index - 1)/games.length)}%`}}></div>
                <div className="pip-scrollbar" style={{left: '0%', width:`${100*(index)/games.length}%`}} onClick={decrement}></div>
                <div className="pip-scrollbar" style={{right: '0%', width:`${100*((games.length - index - 1)/games.length)}%`}} onClick={increment}></div>
            </div>
        </div>
        {
            /**
             // <div className="container">
             //     <div className="category-section-title">
             //         Recommended For You
             //     </div>
             // </div>
             // <div className="container">
             //     <div className="category-section-title">
             //         Popular Titles
             //     </div>
             // </div>
             * 
             */
        }
        <div className="footer-spacer" />
    </div>
}

export default GameGenrePage;