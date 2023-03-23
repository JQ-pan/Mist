import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview } from "../../store/review";
import { useParams } from "react-router-dom";
import { fetchUsers } from "../../store/users";
import { fetchGame } from "../../store/game";
import { fetchReviews } from "../../store/review";
import './ReviewForm.css'

function ReviewForm({game}) {
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
            recommended: true
        };
        dispatch(createReview(finalReview, game.id));
    }

    const handleChange = (e) => {
        setReview({ ...review, body: e.target.value });
    };

    return (
        <div className="input-comment-container">
            <form className="input-comment" onSubmit={handleSubmit}>
                <input
                    type="comment"
                    value={review.body}
                    placeholder="Write a comment"
                    onChange={handleChange}
                />
                <button type="submit">Post Review</button>
            </form>
        </div>
    )
}

export default ReviewForm;