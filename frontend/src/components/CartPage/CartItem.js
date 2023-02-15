import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCartItem } from '../../store/cartItem';
import './CartItem.css';

const CartItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(deleteCartItem(cartItem));
    }

    return (
        <>
            <Link to={`/${cartItem.gameId}`}>
                <img src={cartItem.images} alt={""} />
            </Link>
            <div>
                <Link to={`/${cartItem.gameId}`}>{cartItem.title}</Link>
                <div className="price-and-remove-button">
                    <div className="price">{cartItem.price !== 0 ? '$' + cartItem.price : 'Free'}</div>
                    <button onClick={handleRemove} className="remove-from-cart">Remove</button>
                </div>
            </div>
        </>
    )
}

export default CartItem;