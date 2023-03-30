import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers } from "../../store/users";
import defaultProfileIcon from "../../assets/png-transparent-robotic-process-automation-computer-icons-robotics-roboto-electronics-silhouette-black.png"
import { fetchReviews, updateReview, deleteReview } from "../../store/review";
import thumbsDown from '../../assets/icon_thumbsDown.png';
import thumbsUp from '../../assets/icon_thumbsUp.png';
import './ReviewItem.css';

const ReviewItem = ({ reviewItem, user }) => {
    const dispatch = useDispatch();
    const [editedReview, setEditedReview] = useState(reviewItem.body);
    const [editedRecommendation, setEditedRecommendation] = useState();
    const [isEditing, setIsEditing] = useState(reviewItem.recommended);

    // Check if currentUser is the author of the review
    const isAuthor = reviewItem.author_id === user.id;

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleSaveClick = () => {
        dispatch(updateReview(reviewItem.id, {
            reviewId: reviewItem.id,
            body: editedReview,
            recommended: editedRecommendation,
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

    const handleUpdateRecommend = () => {
        setEditedRecommendation(true)
    }

    const handleUpdateNotRecommend = () => {
        setEditedRecommendation(false)
    }

    // Grab the date at which the review was created
    const date = new Date(reviewItem.createdAt);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.toLocaleString('default', { day: 'numeric' });

    console.log(date);
    console.log("Date: ", month, day)

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
                        <div className="edit-recommendation">
                            <button className="edit-recommend" onClick={handleUpdateRecommend}>Rec</button>
                            <button className="edit-recommend" onClick={handleUpdateNotRecommend}>No Rec</button>
                        </div>

                        <div className="edit-buttons">
                            <button className="save-button" onClick={handleSaveClick}>Save</button>
                            <button className="cancel-button" onClick={handleCancelClick}>Cancel</button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="review-item-header">

                            <img className="review-thumb" src={reviewItem.recommended ? thumbsUp : thumbsDown} alt=""></img>
                            {reviewItem.recommended ? <>
                                Recommended
                            </> : <>
                                Not Recommended
                            </>}

                        </div>
                        <div className="review-date">POSTED: {month} {day}</div>
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