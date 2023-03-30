import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, updateReview } from "../../store/review";
import { fetchUsers } from "../../store/users";
import { fetchLibraryItems } from "../../store/libraryItem";
import ReviewItem from "./ReviewItem";
import './Reviews.css'

function Reviews({ game }) {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.session.user);
    const users = useSelector((state) => state.users?.users);
    const reviewsArray = useSelector(state => state.reviews ? Object.values(state.reviews).filter(
        (review) => review.game_id === game.id
    ) : []);
    const libraryItems = useSelector((state) => state.libraryItems ? Object.values(state.libraryItems) : []);

    const getUser = (authorId) => {
        const user = users?.find(user => user.id === authorId);
        return user ? user : 'Unknown User';
    }

    const reviewItems = reviewsArray.length > 0 ? (
        reviewsArray.map(reviewItem => {
            const user = getUser(reviewItem.author_id);
            return <ReviewItem reviewItem={reviewItem} user={user} key={reviewItem.id} />
        })
    ) : (
        <div className="no-reviews">
            <h1>There are no reviews for this game</h1>
            <p>You can write your own review for this game to share your experience with the community. Use the area above the purchase buttons on this page to write your review.</p>
        </div>
    )
    useEffect(() => {
        dispatch(fetchReviews())
        dispatch(fetchUsers())
        dispatch(fetchLibraryItems)
    }, [])

    return (
        <div className="reviews-container">
            <div className="reviews-title">MOST HELPFUL REVIEWS</div>
            {reviewItems}
        </div>
    )
}

export default Reviews;