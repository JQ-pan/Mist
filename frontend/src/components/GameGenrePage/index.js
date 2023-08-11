import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGames } from '../../store/game';
import StoreNavigation from '../StoreNavigation';
import './GameGenrePage.css';

const GameGenrePage = () => {
    const dispatch = useDispatch();
    const { genre } = useParams();
    useEffect(() => {
        dispatch(fetchGames());
    }, [dispatch, genre])
    const games = useSelector(state => Object.values(state.games).filter(game => game.tag.some(tag => tag.toLowerCase().replace(/ /g, '-') === genre)))

    if (!games.length) {
        return <>Loading</>
    }

    return games && <div id="page-background">
        <StoreNavigation id="category-navbar"/>
        <div id="main-background" 
            style={{
                backgroundImage: `url(${games[0].images[0]})`
            }}
            
            >
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