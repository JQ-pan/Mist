import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, updateReview } from "../../store/review";
import { fetchUsers } from "../../store/users";
import { fetchLibraryItems } from "../../store/libraryItem";
import ReviewItem from "./ReviewItem";
import './Reviews.css';

function Reviews({ game }) {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.session.user);
    const users = useSelector((state) => state.users?.users);
    const reviewsArray = useSelector(state => state.reviews ? Object.values(state.reviews).filter(
        (review) => review.gameId === game.id
    ) : []);
    const libraryItems = useSelector((state) => state.libraryItems ? Object.values(state.libraryItems) : []);

    const getUser = (authorId) => {
        const user = users?.find(user => user.id === authorId);
        return user ? user : 'Unknown User';
    }

    const reviewItems = reviewsArray.length > 0 ? (
        reviewsArray.map(reviewItem => {
            const user = getUser(reviewItem.authorId);
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

    console.log(reviewsArray);

    const count = reviewsArray.reduce((acc, review) => {
        if (review.recommended) {
            acc.trueCount++;
        } else {
            acc.falseCount++;
        }
        return acc;
    }, { trueCount: 0, falseCount: 0 });

    const ratio = count.trueCount / reviewsArray.length;
    console.log(ratio);

    let averageRating;
    if (ratio < 0.19) {
        averageRating = "Negative";
        // const color="#c35c2c"
    } else if (ratio < 0.39) {
        averageRating = "Mostly Negative";
    } else if (ratio < 0.69) {
        averageRating = "Mixed";
        // const color="#a8926a"
    } else if (ratio < 0.79) {
        averageRating = "Mostly Positive";
    } else {
        averageRating = "Positive";
        // const color="#66C0F4"
    }

    return (
        <div className="reviews-container">
            <div className="game-show-average-reviews">CUSTOMER REVIEWS</div>
            <div className="average-reviews-background">
                <div id="average-review-title">Overall Reviews:</div>
                <div id="average-review-value" style={{
                    color:
                        averageRating === "Negative" ? "#c35c2c" :
                        averageRating === "Mostly Negative" ? "#c35c2c" :
                        averageRating === "Mixed" ? "#a8926a" :
                        averageRating === "Mostly Positive" ? "#66C0F4" : "#66C0F4"
                }}>{averageRating} <span>({reviewsArray.length} reviews)</span></div>
            </div>
            <div className="reviews-title">MOST HELPFUL REVIEWS</div>
            {reviewItems}
        </div>
    )
}

export default Reviews;