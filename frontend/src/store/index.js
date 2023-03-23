import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import sessionReducer from './session'
import gamesReducer from './game';
import cartItemsReducer from './cartItem';
import libraryItemsReducer from './libraryItem';
import reviewsReducer from './review';
import userReducer from './users';

export const rootReducer = combineReducers({
  session: sessionReducer,
  users: userReducer,
  games: gamesReducer,
  cartItems: cartItemsReducer,
  libraryItems: libraryItemsReducer,
  reviews: reviewsReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
  } else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore