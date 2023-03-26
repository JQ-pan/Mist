import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../../store/users";
import './ReviewItem.css';

const ReviewItem = ({ reviewItem, user }) => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(fetchUsers());
    // }, [dispatch])
    // console.log(reviewItem);
    return (
        <div className="review-item">
            <div className="left-col">
                {user.username}
            </div>

            <div className="right-col">
                {reviewItem.body}
            </div>
        </div>
    )
}

export default ReviewItem;