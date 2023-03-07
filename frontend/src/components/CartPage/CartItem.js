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
        <div className="cart-item-background">
            <div className="cart-item-content">
                
                {/* Price and Remove Button */}
                <div className="price-and-remove-button">
                    <div className="price">{cartItem.price !== 0 ? '$' + cartItem.price : 'Free'}</div>
                    <button onClick={handleRemove} className="remove-from-cart">Remove</button>
                </div>

                {/* Game Image */}
                <Link to={`/${cartItem.gameId}`}>
                    <img className="cart-item-image" src={cartItem.images} alt={""} />
                </Link>

                {/* Game Title */}
                <div className="cart-item-title">
                    <Link to={`/${cartItem.gameId}`}>
                        {cartItem.title}
                    </Link>
                </div>


            </div>
        </div>
    )
}

export default CartItem;