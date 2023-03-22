import csrfFetch from "./csrf";

// Action Types
const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS";
const ADD_REVIEW = "reviews/ADD_REVIEW";
const REMOVE_REVIEW = "reviews/REMOVE_REVIEW";

// Action Creators
const receiveReviews = (reviews) => ({
    type: RECEIVE_REVIEWS,
    payload: reviews
})

const addReview = (review) => ({
    type: ADD_REVIEW,
    payload: review
})

const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    payload: reviewId
})

// Thunk action creators
export const fetchReviews = () => async dispatch => {
    const res = await csrfFetch('/api/reviews');
    if (res.ok) {
        const reviews = await res.json();
        dispatch(receiveReviews(reviews))
    }
}

export const createReview = (data, gameId) => async dispatch => {
    const res = await csrfFetch('/api/reviews', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    })
    if (res.ok) {
        const review = await res.json();
        dispatch(receiveReviews(review));
    }
}

export const deleteReview = (reviewId) => async dispatch => {
    const res = await csrfFetch('/api/reviews', {
        method: 'DELETE',
    });
    if (res.ok) {
        dispatch(removeReview(reviewId));
    }
}

const reviewsReducer = (state = {}, action) => {
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_REVIEWS:
            return { ...state, ...action.payload };
        case ADD_REVIEW:
            return nextState;
        case REMOVE_REVIEW:
            delete nextState[action.reviewId];
        default:
            return state;
    }
}

export default reviewsReducer;