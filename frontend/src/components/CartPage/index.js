import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { deleteAllCartItems } from "../../store/cartItem";
import CartItem from "./CartItem";
import "./CartPage.css";

const CartPage = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);
    const cartItemsArray = useSelector(state => Object.values(state.cartItems));
    const cartItems = cartItemsArray.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id} />);

    const pricesArray = useSelector(state => {
        return cartItemsArray.map(cartItem => state.games[cartItem.gameId].price);
    })
    const summedPrice = pricesArray.sum(0);
    const totalPrice = summedPrice.toFixed(2);

    const handleRemoveAll = () => {
        alert('Removing all items from cart');
        dispatch(deleteAllCartItems());
    }

    if (!currentUser) {
        return <Redirect to="login" />;
    } else {
        <div className="cart-page">
            <div className="cart-page-header-container">
                <span><Link to="/">All Products</Link> {'>'} Your Shopping Cart</span>
                <h1>YOUR SHOPPING CART</h1>
            </div>
            <div className="cart-page-main-container">
                <div className="cart-page-main-left">
                    {cartItems}
                    <div className="checkout-container">
                        <span>Estimated total<sup>1</sup></span>
                        <div>${totalPrice === 0 ? "0.00" : totalPrice}</div>
                    </div>

                    <div className="purchase-for-self-or-gift">Is this a purchase for yourself or is it a gift? Select one to continue to checkout.</div>

                    <div className="checkout-buttons">
                        <button className="purchase-green-button">Purchase for myself</button>
                        {/* <button className="purchase-green-button">Purchase as a gift</button> */}
                    </div>
                </div>

                <div className="disclaimer-text"><sup>1</sup> Sales tax will be calculated during checkout where applicable</div>

                <div className="continue-shopping-container">
                    <Link to="/" className="continue-shopping-button">Continue Shopping</Link>
                    <span onClick={handleRemoveAll} className="remove-all-items">Remove all items</span>
                </div>

                <div className="cart-page-main-right"> 
                    {/* Additional games, Spotlight, and Recommended */}
                </div>

                <div className="deliver-container">
                    <h1>Delivery</h1>
                    <div className="notice-box">
                        <img></img>
                        <div className="notice-box-text">
                            <div className="first-line">All digital goods are delivered via the Mist webpage application</div>
                            <div className="second-line">Mist and your games will be available for download at the end of the purchase.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default CartPage