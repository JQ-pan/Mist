import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers } from "../../store/users";
import defaultProfileIcon from "../../assets/png-transparent-robotic-process-automation-computer-icons-robotics-roboto-electronics-silhouette-black.png"
import { fetchReviews, updateReview, deleteReview } from "../../store/review";
import './ReviewItem.css';

const ReviewItem = ({ reviewItem, user }) => {
    const dispatch = useDispatch();
    const [editedReview, setEditedReview] = useState(reviewItem.body);
    const [editedRecommendation, setEditedRecommendation] = useState();
    const [isEditing, setIsEditing] = useState(false);

    // Check if currentUser is the author of the review
    const isAuthor = reviewItem.author_id === user.id;

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleSaveClick = () => {
        dispatch(updateReview(reviewItem.id, {
            reviewId: reviewItem.id,
            body: editedReview,
        })).then(() => {
            dispatch(fetchReviews());
            setIsEditing(false);
        })
    }

    const handleCancelClick = () => {
        setEditedReview(reviewItem.body);
        setIsEditing(false);
    }

    const handleDeleteClick = () => {
        dispatch(deleteReview(reviewItem.id));
    }

    return (
        <div className="review-item">
            <div className="left-col">
                <div className="profile-icon-container">
                    <img className="profile-icon" src={defaultProfileIcon} alt=""></img>
                </div>
                <div className="review-username">
                    <span>{user.username}</span>
                </div>
            </div>

            <div className="right-col">
                {isEditing ? (
                    <div className="edit-container">
                        <textarea
                            className="edit-textarea"
                            value={editedReview}
                            onChange={(e) => setEditedReview(e.target.value)}
                        />
                        <div className="edit-buttons">
                            <button className="save-button" onClick={handleSaveClick}>Save</button>
                            <button className="cancel-button" onClick={handleCancelClick}>Cancel</button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="review-body">{reviewItem.body}</div>
                        {isAuthor && (
                            <>
                                <button className="edit-button" onClick={handleEditClick}>Edit</button>
                                <button className="delete-button" onClick={handleDeleteClick}>Delete</button>
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default ReviewItem;