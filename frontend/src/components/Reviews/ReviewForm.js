import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/review";
import { fetchGame } from "../../store/game";
import { fetchReviews } from "../../store/review";
import demoIcon from '../../assets/png-transparent-robotic-process-automation-computer-icons-robotics-roboto-electronics-silhouette-black.png';
import thumbsDown from '../../assets/icon_thumbsDown.png';
import thumbsUp from '../../assets/icon_thumbsUp.png';

import './ReviewForm.css'

function ReviewForm({ game }) {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.session.user);
    const [review, setReview] = useState({
        body: ""
    });

    const reviewsArray = useSelector(state => state.reviews ? Object.values(state.reviews).filter(
        (review) => review.game_id === game.id
    ) : []);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const finalReview = {
            author_id: currentUser.id,
            game_id: game.id,
            body: review.body,
            recommended: review.recommended === null ? true : review.recommended
        };
        dispatch(createReview(finalReview));
    }

    const handleChange = (e) => {
        setReview({ ...review, body: e.target.value });
    };
    
    const handleRecommend = (value) => {
        setReview({ ...review, recommended: value });
    }




    // Check if user already has left a review on this game and grab the date
    const reviewExists = reviewsArray.find(review => review.author_id === currentUser.id);
    const reviewDate = reviewExists ? new Date(reviewExists.created_at) : "";
    const month = reviewDate.toLocaleString('default', { month: 'long' });
    const day = reviewDate.toLocaleString('default', { day: 'numeric' });
    
    // Check the rating on the review if one exists
    const reviewRecommended = reviewExists ? reviewExists.recommended : null;

    return (
        <div className="input-review-container">
            <div className="owned-header">
                <div className="owned-tab">
                    IN LIBRARY
                </div>

                <div className="owned-text">
                    {game.title} is already in your Mist library
                </div>
            </div>


            <div className="review-background">
                <div className="review-block">

                    {reviewExists ? <>
                        <div className="input-header">
                            <h2>You reviewed this game on {month} {day}</h2>
                            <div className="review-description">
                                <img className="thumb" src={reviewRecommended ? thumbsUp : thumbsDown} alt=""></img>
                                <p>Your review is currently marked as publicly visible. You can edit this review, change your rating, and change the visibility setting if you wish.</p>
                            </div>
                        </div>
                    </> : <>
                            <div className="input-header">
                                <h2>Write a review for {game.title}</h2>
                                <div className="review-description">
                                    <p>Please write what you liked or disliked about this game and whether you recommend it to others.</p>
                                    <p>Please remember to be polite and follow the Rules and Guidelines</p>
                                </div>
                            </div>

                            <div className="avatar-icon">
                                <img src={demoIcon} alt=""></img>
                            </div>

                            <div className="input-content">

                                <form className="input-review" onSubmit={handleSubmit}>

                                    <textarea
                                        type="review"
                                        value={review.body}
                                        placeholder=""
                                        onChange={handleChange}
                                    />
                                    <p>Do you recommend this game?</p>
                                    <div className="review-buttons">

                                        <div className="recommend-buttons">
                                            <button
                                                type="button"
                                                onClick={() => handleRecommend(true)}
                                                className={review.recommended === true ? "selected thumbs-up-button" : "thumbs-up-button"}
                                            >
                                                <span>
                                                    <i className={review.recommended === true ? "thumbs-up thumb-icon selected-icon" : "thumbs-up thumb-icon"}></i>
                                                    &nbsp;Yes

                                                </span>
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleRecommend(false)}
                                                className={review.recommended === false ? "selected thumbs-down-button" : "thumbs-down-button"}
                                            >
                                                <span>
                                                    <i className={review.recommended === false ? "thumbs-down thumb-icon selected-icon" : "thumbs-down thumb-icon"}></i>
                                                    &nbsp;No
                                                </span>
                                            </button>
                                        </div>

                                        <button className="post-review" type="submit">Post Review</button>
                                    </div>
                                </form>

                            </div>
                        </>
                    }


                </div>

            </div>
        </div>
    )
}

export default ReviewForm;