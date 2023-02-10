import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameIndexItem from './GameIndexItem'
import { fetchGames } from '../../store/game';

const GameIndex = () => {
    // debugger
    const dispatch = useDispatch();
    const games = useSelector(state => Object.values(state.games))
    useEffect(() => {dispatch(fetchGames())}, [dispatch])
    
    const gameItems = games.map((game, i) => <GameIndexItem key={i} game={game}/>)
    return (
        <ul id="games-list">
            {gameItems}
        </ul>
    )
}

export default GameIndex;