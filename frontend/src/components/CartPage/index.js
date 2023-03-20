// import { useEffect, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { deleteAllCartItems } from "../../store/cartItem";
import { fetchCartItems } from "../../store/cartItem";
import { createLibraryItem } from "../../store/libraryItem";
import { useHistory } from "react-router-dom";
import logo from "../../assets/steam-icon-14885.png";
import CartItem from "./CartItem";
import "./CartPage.css";

const CartPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector(state => state.session.user);

    // Fetch cart items
    const cartItemsArray = useSelector(state => state.cartItems ? Object.values(state.cartItems) : []);

    const cartItems = cartItemsArray.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.id} />);
    
    useEffect(() => {
        dispatch(fetchCartItems());
    }, [dispatch])

    const total = cartItemsArray.reduce((acc, val) => (acc + parseFloat(val.price)), 0);

    const handleClearCart = () => {
        alert('Removing all items from cart');
    }
    
    // Add to library
    const handleAddToLibrary = async () => {
        for (let game of cartItemsArray) {
            dispatch(createLibraryItem(game.id))
        }
        dispatch(deleteAllCartItems());
        history.push('/library')
    }

    if (!currentUser) {
        return <Redirect to="login" />;
    } else {
        return (
            <div className="cart-page-content">
                <div className="cart-page-header-background">

                    <div className="cart-page-header-container">
                        <span className="breadcrumb"><Link className="home-link" to="/">All Products</Link> {'>'} Your Shopping Cart</span>
                        <div className="cart-header">YOUR SHOPPING CART</div>
                    </div>
                </div>

                <div className="cart-page-main-container">
                    <div className="cart-page-main-left">
                        {cartItems}

                        <div className="checkout-background">
                            <div className="cart-totals-container">
                                <div className="cart-totals-content">
                                    <div className="estimated-total-text">
                                        Estimated total
                                        <sup>1</sup>
                                    </div>
                                    <span className="cart-total-price-content">{total === 0 ? "FREE" : "$" + Number(total).toFixed(2)}</span>

                                    {/* <span>Estimated total<sup>1</sup></span>
                                <div>${total === 0 ? "FREE" : Number(total).toFixed(2)}</div> */}
                                </div>
                            </div>

                            <div className="checkout-actions">
                                <div className="purchase-for-self-or-gift">Is this a purchase for yourself or is it a gift? Select one to continue to checkout.</div>
                                <div className="checkout-buttons">
                                    <button className="purchase-green-button" onClick={handleAddToLibrary}>
                                        <span>Purchase for myself</span>
                                    </button>
                                    <button className="purchase-green-button">
                                        <span>Purchase as a gift</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="disclaimer-text-container">
                            <div className="sales-tax-tag">
                                <sup>1</sup>
                            </div>
                            <div className="disclaimer-text">Sales tax will be calculated during checkout where applicable</div>
                        </div>

                        <div className="continue-shopping-container">
                            <Link to="/" className="continue-shopping-button"><span>Continue Shopping</span></Link>
                            <div className="remove-all-items-container">
                                <span onClick={handleClearCart} className="remove-all-items">Remove all items</span>
                            </div>
                        </div>

                        <br/>
                        <br/>

                        <div className="deliver-container">
                            <h1>Delivery</h1>
                            <div className="notice-box">
                                <img className="delivery-image" src={logo} alt=""></img>
                                <div className="notice-box-text">
                                    <div className="first-line">All digital goods are delivered via the Mist webpage application</div>
                                    <div className="second-line">Mist and your games will be available for download at the end of the purchase.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cart-page-main-right">
                        <h2>COMING SOON</h2>
                        <p>This component is not yet complete.</p>
                        {/* Additional games, Spotlight, and Recommended */}
                    </div>
                </div>

            </div>)
    }
}

export default CartPage