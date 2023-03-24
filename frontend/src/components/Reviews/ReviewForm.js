import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/review";
import { useParams } from "react-router-dom";
import { fetchUsers } from "../../store/users";
import { fetchGame } from "../../store/game";
import { fetchReviews } from "../../store/review";
import demoIcon from '../../assets/png-transparent-robotic-process-automation-computer-icons-robotics-roboto-electronics-silhouette-black.png';
import './ReviewForm.css'

function ReviewForm({ game }) {
    const dispatch = useDispatch();
    // const { gameId } = useParams();
    const currentUser = useSelector((state) => state.session.user);
    const users = useSelector((state) => state.users?.users);
    // const game = useSelector(state => state.games ? state.games[gameId] : {});
    const [review, setReview] = useState({
        body: ""
    });

    useEffect(() => {
        dispatch(fetchReviews())
        dispatch(fetchUsers())
        dispatch(fetchGame(game.id))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        const finalReview = {
            author_id: currentUser.id,
            game_id: game.id,
            body: review.body,
            recommended: review.recommended
        };
        dispatch(createReview(finalReview, game.id));
    }

    const handleChange = (e) => {
        setReview({ ...review, body: e.target.value });
    };

    const handleRecommend = (value) => {
        setReview({ ...review, recommended: value });
    }

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

                            <input
                                type="review"
                                value={review.body}
                                placeholder="Write a review"
                                onChange={handleChange}
                            />
                            <p>Do you recommend this game?</p>
                            <div className="review-buttons">

                                <div className="recommend-buttons">
                                    <button
                                        type="button"
                                        onClick={() => handleRecommend(true)}
                                        className={review.recommended === true ? "selected" : ""}
                                    >
                                        Yes
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleRecommend(false)}
                                        className={review.recommended === false ? "selected" : ""}
                                    >
                                        No
                                    </button>
                                </div>

                                <button className="post-review" type="submit">Post Review</button>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ReviewForm;