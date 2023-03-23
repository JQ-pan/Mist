import csrfFetch from "./csrf";

// Action Types
const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS";
const ADD_REVIEW = "reviews/ADD_REVIEW";
const REMOVE_REVIEW = "reviews/REMOVE_REVIEW";
const EDIT_REVIEW = "reviews/EDIT_REVIEW";

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

const editReview = (review) => ({
    type: EDIT_REVIEW,
    payload: review
});

// Thunk action creators
export const fetchReviews = () => async dispatch => {
    const res = await csrfFetch('/api/reviews');
    if (res.ok) {
        const reviews = await res.json();
        dispatch(receiveReviews(reviews))
    }
}

export const createReview = (body, gameId) => async dispatch => {
    const res = await csrfFetch('/api/reviews', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(body)
    })
    if (res.ok) {
        const review = await res.json();
        dispatch(addReview(review));
    }
}

export const updateReview = (reviewId, body) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(body)
    });
    if (res.ok) {
        const updatedReview = await res.json();
        dispatch(editReview(updatedReview));
    }
}

export const deleteReview = (reviewId) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
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
            nextState[action.payload._id] = action.payload;
            return nextState;
        case REMOVE_REVIEW:
            delete nextState[action.reviewId];
        default:
            return state;
    }
}

export default reviewsReducer;