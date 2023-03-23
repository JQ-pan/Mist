import { useDispatch } from "react-redux";
import { fetchUsers } from "../../store/users";
import './ReviewItem.css';

const ReviewItem = ({ reviewItem }) => {
    const dispatch = useDispatch();
    return (
        <div className="review-item-background">
            {reviewItem.body}
        </div>
    )
}

export default ReviewItem;