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
    } else {
        throw new Error('Failed to fetch reviews');
    }
}

export const createReview = (review) => async dispatch => {
    debugger
    const res = await csrfFetch('/api/reviews', {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(review),
        // body: {review: JSON.stringify(review)},
    })
    debugger
    if (res.ok) {
        const review = await res.json();
        dispatch(addReview(review));
    } else {
        throw new Error('Failed to create review');
    }
}

export const updateReview = (reviewId, review) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(review)
    });
    if (res.ok) {
        const updatedReview = await res.json();
        dispatch(editReview(updatedReview));
    } else {
        throw new Error('Failed to update review');
    }
}

export const deleteReview = (reviewId) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
    });
    if (res.ok) {
        dispatch(removeReview(reviewId));
    } else {
        throw new Error('Failed to delete review');
    }
}

const reviewsReducer = (state = {}, action) => {
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_REVIEWS:
            return { ...state, ...action.payload };
        case ADD_REVIEW:
            return { ...nextState, ...action.payload.review };
        case REMOVE_REVIEW:
            delete nextState[action.payload];
            return nextState;
        default:
            return state;
    }
}

export default reviewsReducer;