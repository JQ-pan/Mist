import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGame } from '../../store/game'
import './GameShowPage.css'

function GameShowPage() {
    const dispatch = useDispatch();
    const { gameId } = useParams();

    const game = useSelector(state => state.games ? state.games[gameId] : {});
    useEffect(() => {
        dispatch(fetchGame(gameId));
    }, [gameId, dispatch])

    if (game === undefined) {
        return <>Still loading...</>
    }

    return (
        <>
            {game.title}
        </>
    )
}

export default GameShowPage