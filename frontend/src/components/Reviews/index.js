import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, updateReview } from "../../store/review";
import { fetchUsers } from "../../store/users";
import ReviewItem from "./ReviewItem";

function Reviews({game}) {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.session.user);
    const users = useSelector((state) => state.users?.users);

    const reviewsArray = useSelector(state => state.reviews ? Object.values(state.reviews): []);
    const reviewItems = reviewsArray.map(reviewItems => <ReviewItem reviewItem={reviewItems} key={reviewItems.id}/>)
    // const game = useSelector(state => state.games ? state.games : {});
    // const [editing, setEditing] = useState({
    //     body: ""
    // });
    // const [editingReviewId, setEditingReviewId] = useState(null);


    useEffect(() => {
        dispatch(fetchReviews())
        dispatch(fetchUsers())
    }, [])

    // const handleChange = (e) => {
    //     setEditing({ ...editing, body: e.target.value });
    // };

    // const handleEditSubmit = (e, reviewId) => {
    //     e.preventDefault();
    //     const updateEditing = {
    //         author: currentUser._id,
    //         game: game._id,
    //         body: editing.body

    //     };
    //     dispatch(updateReview(reviewId, updateEditing));
    //     setEditingReviewId(null);
    // }

    // const handleEdit = (review) => {
    //     setEditing({ ...editing, body: review.body });
    //     setEditingReviewId(review._id);
    // }

    return (
        <div className="reviews-container">
            {reviewItems}
        </div>
    )
}

export default Reviews;