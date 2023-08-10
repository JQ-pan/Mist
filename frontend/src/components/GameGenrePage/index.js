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

    return games && <div id="main-background" 
        style={{
        backgroundImage: `url(${games[0].images[0]})`,

    }}
        >
        <StoreNavigation />
    </div>
}

export default GameGenrePage;