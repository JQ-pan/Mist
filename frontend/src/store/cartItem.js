import csrfFetch from "./csrf";
import { REMOVE_CURRENT_USER } from "./session";

const RECEIVE_CART_ITEMS = 'cartItems/RECEIVE_CART_ITEMS';
const ADD_CART_ITEM = 'cartItems/ADD_CART_ITEM';
const REMOVE_CART_ITEM = 'cartItems/REMOVE_CART_ITEM';
const CLEAR_CART = 'cartItems/CLEAR_CART';

// action creators
const receiveCartItems = (cartItems) => ({
    type: RECEIVE_CART_ITEMS,
    payload: cartItems
});

const addCartItem = (cartItem) => ({
    type: ADD_CART_ITEM,
    payload: cartItem
});

const removeCartItem = (cartItemId) => ({
    type: REMOVE_CART_ITEM,
    payload: cartItemId,
});

const clearCart = () => ({
    type: CLEAR_CART
})

// thunk action creators
export const fetchCartItems = () => async (dispatch) => {
    const res = await csrfFetch('/api/cart_items');
    if (res.ok) {
        const cartItems = await res.json();
        dispatch(receiveCartItems(cartItems));
    }
};

export const createCartItem = (gameId) => async (dispatch) => {
    const res = await csrfFetch('/api/cart_items', {
        method: 'POST',
        body: JSON.stringify({ cart_item: { game_id: gameId }}),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (res.ok) {
        const cartItem = await res.json();
        dispatch(addCartItem(cartItem));
    }
};

export const deleteCartItem = (cartItem) => async (dispatch) => {
    const res = await csrfFetch(`/api/cart_items/${cartItem.id}`, {
        method: 'DELETE',
    });
    if (res.ok) {
        dispatch(removeCartItem(cartItem.id));
    }
};

export const deleteAllCartItems = () => async (dispatch) => {
    await csrfFetch('/api/cart_items/all', {
        method: 'DELETE'
    });
    dispatch(clearCart());
}

// reducers
const cartItemsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return { ...state, ...action.payload.games };
        case ADD_CART_ITEM:
            return { ...state, ...action.payload.games };
        case REMOVE_CART_ITEM:
            delete nextState[action.payload];
            return nextState;
        case CLEAR_CART:
            return {};
        case REMOVE_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default cartItemsReducer;