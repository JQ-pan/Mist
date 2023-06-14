import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameIndexItem from './GameIndexItem';
import Featured from './Featured';
import { fetchGames } from '../../store/game';
import StoreNavigation from '../StoreNavigation';
import './GameIndex.css';

const GameIndex = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => Object.values(state.games))
    useEffect(() => { 
        dispatch(fetchGames()) 
    }, [dispatch])
    
    const [index, setIndex] = useState(0);
    const handleMouseEnter = index => {
        setIndex(index);
    }
    const gamePreview = games.length > 0 ? games[index] : {}
    const gameItems = games.map((game, i) => 
        <div onMouseEnter={() => handleMouseEnter(i)}>
            <GameIndexItem key={i} game={game} />
        </div>
    )
    return (
        <div className="game-display-background">
            <StoreNavigation />
            <Featured games={games}/>
            <div className="game-display-container">
                <div className="game-display-main">
                    <div className="game-left-display-container">
                        <ul id="games-list">
                            {gameItems}
                        </ul>
                    </div>
                    <div className="tab-preview">
                        <div className="tab-preview-content">
                            <h2>{gamePreview.title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GameIndex;