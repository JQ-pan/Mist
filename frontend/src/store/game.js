import csrfFetch from "./csrf";

const RECEIVE_GAMES = 'RECEIVE_GAMES'
const RECEIVE_GAME = 'RECEIVE_GAME'

// actions

const receiveGames = games => ({
    type: RECEIVE_GAMES,
    payload: games
})

const receiveGame = game => ({
    type: RECEIVE_GAME,
    payload: game
})

// selectors

export const getGames = state => {
    return state?.games ? Object.values(state.games) : []
}

export const getGame = (gameId) => state => {
    return state?.game ? state.game[gameId] : null
}

//thunk methods

export const fetchGames = () => async dispatch => {
    const res = await csrfFetch('/api/games')
    if (res.ok) {
        const games = await res.json();
        dispatch(receiveGames(games))
    }
}

export const fetchGame = (gameId) => async dispatch => {
    const res = await csrfFetch(`/api/games/${gameId}`)
    if (res.ok) {
        const game = await res.json();
        dispatch(receiveGame(game))
    }
}

// Reducer

const gamesReducer = (state = {}, action) => {
    Object.freeze(state)
    const nextState = { ...state }

    switch (action.type) {
        case RECEIVE_GAME:
            if (action.payload.id) nextState[action.payload.id] = action.payload;
            return nextState;
        case RECEIVE_GAMES:
            return { ...nextState, ...action.payload};
        default:
            return state;
    }
}

export default gamesReducer;
