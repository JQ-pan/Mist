import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameIndexItem from './GameIndexItem';
import Featured from './Featured';
import { fetchGames } from '../../store/game';
import { fetchAllReviews } from '../../store/review';
import StoreNavigation from '../StoreNavigation';
import { Link } from 'react-router-dom';
import './GameIndexPage.css';

const GameIndex = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => Object.values(state.games).slice(0,9))
    
    useEffect(() => {
        dispatch(fetchGames());
        dispatch(fetchAllReviews());
    }, [dispatch])

    const [index, setIndex] = useState(0);
    const handleMouseEnter = index => {
        setIndex(index);
    }
    const gamePreview = games.length > 0 ? games[index] : {};

    const gameItems = games.map((game, i) =>
        <div key={i} onMouseEnter={() => handleMouseEnter(i)} className={index === i ? "game-container focused" : "game-container"}>
            <GameIndexItem key={i} game={game} />
        </div>
    )

    const reviews = useSelector(state => Object.values(state.reviews));
    const reviewRatios = reviews.map(review => {
        return [review.gameId, review.recommended]
    }).reduce((acc, [key, value]) => {
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(value);
        return acc;
    }, {})

    console.log(reviewRatios);
    const reviewObject = {};

    for (const [key, array] of Object.entries(reviewRatios)) {
        const length = array.length;
        const trueCount = array.filter(value => value === true).length;
        const falseCount = length - trueCount;
        const ratio = trueCount / falseCount;
        let averageRating;
        if (ratio < 0.19) {
            averageRating = "Negative";
            // const color="#c35c2c"
        } else if (ratio < 0.39) {
            averageRating = "Mostly Negative";
        } else if (ratio < 0.69) {
            averageRating = "Mixed";
            // const color="#a8926a"
        } else if (ratio < 0.79) {
            averageRating = "Mostly Positive";
        } else {
            averageRating = "Positive";
            // const color="#66C0F4"
        }
        reviewObject[key] = [length, averageRating];
    }

    const gameTags = gamePreview && gamePreview.tag
        ? gamePreview.tag.map((tag, i) => 
        <Link className="tag-link" key={i} exact to={`/${tag.toLowerCase().replace(/ /g, '-')}`}>
            {tag}
        </Link>) : <>Tags not loading</>;

    if (games.length === 0) {
        return <>Still loading...</>
    } else {
        return (
            <div className="game-display-background">
                <StoreNavigation />
                <Featured games={games} />
                <div className="game-display-container">
                    <div className="game-display-main">
                        <div className="game-left-display-container">
                            <ul id="games-list">
                                {gameItems}
                            </ul>
                        </div>
                        <div className="tab-preview-container">
                            <div className="tab-preview-content">
                                {gamePreview && Object.keys(gamePreview).length > 0 && Object.keys(reviewObject).length > 0 && (
                                    <>
                                        <h2>{gamePreview.title}</h2>
                                        <div className="tab-preview-summary">
                                            <div className="tab-preview-title">Overall user reviews:</div>
                                            <span className="game-review-summary" style={{
                                                color:
                                                    reviewObject[gamePreview.id][1] === "Negative" ? "#c35c2c" :
                                                        reviewObject[gamePreview.id][1] === "Mostly Negative" ? "#c35c2c" :
                                                            reviewObject[gamePreview.id][1] === "Mixed" ? "#a8926a" :
                                                                reviewObject[gamePreview.id][1] === "Mostly Positive" ? "#66C0F4" : "#66C0F4"
                                            }}>{reviewObject[gamePreview.id][1]}</span>
                                            <span>&nbsp;({reviewObject[gamePreview.id][0]})</span>
                                        </div>

                                        <ul className="tab-preview-tags">
                                            {gameTags} 
                                        </ul>
                                        
                                        <ul className="tab-preview-images">
                                            <img src={gamePreview.images[1]} alt="" />
                                            <img src={gamePreview.images[2]} alt="" />
                                            <img src={gamePreview.images[3]} alt="" />
                                            <img src={gamePreview.images[4]} alt="" />
                                        </ul>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameIndex;