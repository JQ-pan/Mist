import csrfFetch from "./csrf";

export const RECEIVE_GAMES = 'RECEIVE_GAMES'
export const RECEIVE_GAME = 'RECEIVE_GAME'

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
    
}