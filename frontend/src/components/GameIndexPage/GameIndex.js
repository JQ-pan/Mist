import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameIndexItem from './GameIndexItem'
import { fetchGames } from '../../store/game';
import { Link } from 'react-router-dom';
import './GameIndex.css'

const GameIndex = () => {
    const dispatch = useDispatch();
    const games = useSelector(state => Object.values(state.games))
    useEffect(() => { dispatch(fetchGames()) }, [dispatch])

    const gameItems = games.map((game, i) => <GameIndexItem key={i} game={game} />)
    return (
        <div className="game-display-background">
            <div className="game-display-container">
                <div className="cart-container">
                    <Link className="cart-button-background" exact to={'/cart'}>
                        <div className="cart-button-text">
                            CART
                        </div>
                    </Link>
                </div>
                <div className="game-display-main">
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
        </div>

    )
}

export default GameIndex;