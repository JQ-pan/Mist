import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers } from "../../store/users";
import defaultProfileIcon from "../../assets/png-transparent-robotic-process-automation-computer-icons-robotics-roboto-electronics-silhouette-black.png"
import { fetchReviews, updateReview, deleteReview } from "../../store/review";
import thumbsDown from '../../assets/icon_thumbsDown.png';
import thumbsUp from '../../assets/icon_thumbsUp.png';
import './ReviewItem.css';

const ReviewItem = ({ reviewItem, user, currentUser }) => {
    const dispatch = useDispatch();
    const [editedReview, setEditedReview] = useState(reviewItem.body);
    const [editedRecommendation, setEditedRecommendation] = useState(reviewItem.recommended);
    const [isEditing, setIsEditing] = useState();

    // Check if currentUser is the author of the review
    const isAuthor = currentUser ? reviewItem.authorId === currentUser.id : null;

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

                        <p>Do you recommend this game?</p>
                        <div className="edit-buttons-container">
                            <div className="edit-recommendation">
                                <button className="edit-recommend" onClick={handleUpdateRecommend}>
                                    <span>
                                        {!editedRecommendation ? <i className="recommendation-icon" id="thumbs-up" /> : <i className="recommendation-icon selected-rec" id="thumbs-up"/>}
                                        Yes
                                    </span>
                                </button>
                                <button className="edit-recommend" onClick={handleUpdateNotRecommend}>
                                    <span>
                                        {editedRecommendation ? <i className="recommendation-icon" id="thumbs-down" /> : <i className="recommendation-icon selected-rec" id="thumbs-down" />}
                                        No
                                    </span>
                                </button>
                            </div>

                            <div className="save-cancel-container">
                                <button className="edit-buttons cancel-button" onClick={handleCancelClick}>
                                    <span>Cancel</span>
                                </button>
                                <button className="edit-buttons save-button" onClick={handleSaveClick}>
                                    <span>Save Changes</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="review-item-header">

                            <img className="review-thumb" src={reviewItem.recommended ? thumbsUp : thumbsDown} alt=""></img>
                            {reviewItem.recommended ? <>
                                <h2>Recommended</h2>
                            </> : <>
                                <h2>Not Recommended</h2>
                            </>}

                        </div>
                        <div className="review-date">Posted: {month} {day}</div>
                        <div className="review-body">{reviewItem.body}</div>
                        {isAuthor && (
                            <div className="edit-and-delete-buttons">
                                <button className="select-edit-button" onClick={handleEditClick}>
                                    <img className="buttonIcon" src="https://community.akamai.steamstatic.com/public/images//sharedfiles/icons/icon_edit.png" />
                                    Edit Review
                                </button>
                                <button className="select-delete-button" onClick={handleDeleteClick}>
                                    <img className="buttonIcon" src="https://community.akamai.steamstatic.com/public/images//sharedfiles/icons/icon_delete.png" />
                                    Delete
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default ReviewItem;