import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../../store/users";
import defaultProfileIcon from "../../assets/png-transparent-robotic-process-automation-computer-icons-robotics-roboto-electronics-silhouette-black.png"
import './ReviewItem.css';

const ReviewItem = ({ reviewItem, user }) => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchUsers());
    // }, [dispatch])
    // console.log(reviewItem);
    // console.log({user});
    return (
        <div className="review-item">
            <div className="left-col">
                <div className="profile-icon-container">
                    <img className="profile-icon"src={defaultProfileIcon} default=""></img>
                </div>
                <div className="review-username">
                    <span>{user.username}</span>
                </div>
            </div>

            <div className="right-col">
                {reviewItem.body}
            </div>
        </div>
    )
}

export default ReviewItem;