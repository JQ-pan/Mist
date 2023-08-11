import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGames } from '../../store/game';
import { fetchAllReviews } from '../../store/review';

import StoreNavigation from '../StoreNavigation';
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
    const game = games[index];

    const increment = () => {
        index == games.length - 1? setIndex(0) : setIndex(index + 1);
    }

    const decrement = () => {
        setIndex(index + 1);
    }

    if (!games.length) {
        return <>Loading</>
    }

    return games && <div id="page-background">
        <StoreNavigation id="category-navbar"/>
        <div id="category-background" 
            style={{
                backgroundImage: `url(${game.images[0]})`
            }}
            >
        </div>
        <div className="carousel-container">
            <div className="category-carousel-title">{genre}</div>
            <div className="category-carousel-content">
                <img className="slide-image" src={game.images[0]}/>
                <div className="category-featured-content">
                    <div className="category-featured-info">
                        <div className="category-featured-title">
                            {game.title}
                        </div>
                        <div className="category-featured-release-date">
                            {game.releaseDate}
                        </div>
                        <div className="category-featured-rating-container">
                            <div className="category-featured-rating-content">
                                Very Positive <span> | 231,560 User Reviews </span>
                            </div>
                        </div>
                    </div>
                    <div className="category-featured-tag-box">
                        {game.tag.map(tag => <div className="category-featured-tags">{tag}</div>)}
                    </div>
                    <div className="category-featured-info-box">
                        {game.description}
                    </div>
                    <div className="buttons">
                        <button onClick={decrement}>Prev</button>
                        <button onClick={increment}>Next</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container" id="testing">
            <div className="category-section-title">
                Recommended For You
            </div>
            <div className="test">
                
            </div>
        </div>
        <div className="container">
            <div className="category-section-title">
                Popular Titles
            </div>
            <div className="test">
                
            </div>
        </div>
        <div className="footer-spacer" />
    </div>
}

export default GameGenrePage;