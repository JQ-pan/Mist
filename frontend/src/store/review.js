import csrfFetch from "./csrf";

const RECEIVE_REVIEWS = "reviews/RECEIVE_REVIEWS";
const ADD_REVIEW = "reviews/ADD_REVIEW";
const REMOVE_REVIEW = "reviews/REMOVE_REVIEW";

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

export const fetchReviews = () => async (dispatch) => {
    const res = await csrfFetch('/api/reviews');
    if (res.ok) {
        const reviews = await res.json();
        dispatch(receiveReviews(reviews))
    }
}

// export const createReview = (review)