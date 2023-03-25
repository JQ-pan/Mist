import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../../store/users";
import './ReviewItem.css';

const ReviewItem = ({ reviewItem }) => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users)
    console.log(users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    return (
        <div className="review-item-background">
            {reviewItem.body}
        </div>
    )
}

export default ReviewItem;