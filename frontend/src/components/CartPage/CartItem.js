import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCartItem } from '../../store/cartItem';
import './CartItem.css';

const CartItem = ({ cartItem }) => {
    const dispatch = useDispatch();
    const game = useSelector(state => state.games[cartItem.gameId]) || {};
    const handleRemove = () => {
        dispatch(deleteCartItem(cartItem.id));
    }

    return (
        <>
            <Link to={`/${game.id}`}>
                <img src={game.images} alt={""} />
            </Link>
            <div>
                <Link to={`/${game.id}`}>{game.title}</Link>
                <div className="price-and-remove-button">
                    <div className="price">{game.price !== 0 ? '$' + game.price : 'Free'}</div>
                    <button onClick={handleRemove} className="remove-from-cart">Remove</button>
                </div>
            </div>
        </>
    )
}

export default CartItem;