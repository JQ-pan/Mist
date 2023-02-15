import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameIndexItem from './GameIndexItem'
import { fetchGames } from '../../store/game';
import './GameIndex.css'

const GameIndex = () => {
    // debugger
    const dispatch = useDispatch();
    const games = useSelector(state => Object.values(state.games))
    useEffect(() => { dispatch(fetchGames()) }, [dispatch])

    const gameItems = games.map((game, i) => <GameIndexItem key={i} game={game} />)
    return (
        <div className="game-display-background">
            <div className="game-display-container">
                <div className="game-left-display-container">
                    <ul id="games-list">
                        {gameItems}
                    </ul>
                </div>
                <div className="game-right-display-container">
                    <div className="game-right-display-content">
                        Here goes game previews
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GameIndex;