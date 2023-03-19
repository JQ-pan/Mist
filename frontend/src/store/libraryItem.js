import csrfFetch from "./csrf";
import { REMOVE_CURRENT_USER } from "./session";

const RECEIVE_LIBRARY_ITEMS = 'RECEIVE_LIBRARY_ITEMS';
const ADD_LIBRARY_ITEM = 'ADD_LIBRARY_ITEM';

// action creators
const receiveLibraryItems = (libraryItems) => ({
    type: RECEIVE_LIBRARY_ITEMS,
    payload: libraryItems
});

const addLibraryItem = (libraryItem) => ({
    type: ADD_LIBRARY_ITEM,
    payload: libraryItem
})

// thunk action creators
export const fetchLibraryItems = () => async (dispatch) => {
    const res = await csrfFetch('/api/library_items');
    if (res.ok) {
        const libraryItems = await res.json();
        dispatch(receiveLibraryItems(libraryItems));
    }
};

export const createLibraryItem = (gameId) => async (dispatch) => {
    const res = await csrfFetch('/api/library_items', {
        method: 'POST',
        body: JSON.stringify({ library_item: { game_id: gameId }}),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (res.ok) {
        const libraryItem = await res.json();
        dispatch(addLibraryItem(libraryItem));
    }
}

// reducers
const libraryItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_LIBRARY_ITEMS:
            return { ...state, ...action.payload.games };
        case ADD_LIBRARY_ITEM:
            return nextState;
        case REMOVE_CURRENT_USER:
            return {};
        default: return state;
    }
};

export default libraryItemsReducer;