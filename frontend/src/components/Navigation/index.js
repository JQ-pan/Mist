import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../assets/steam-icon-14885.png'

function Navigation() {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink className="loginButton" to="/login">Log In</NavLink>
                <NavLink className="signupButton" to="/signup">Sign Up</NavLink>
            </>
        );
    }

    return (
        <div className="navbar">
            <div className="navbar_left">
                {/* Logo and Link to home page  */}
                <NavLink className="link" exact to="/">
                    <img className="app_logo" src={logo} alt="" />
                    <p className="title">MIST</p>
                </NavLink>

                <div className="navbar_menu">
                    <NavLink className="navbar_menu_links" exact to="/">STORE</NavLink>
                    <NavLink className="navbar_menu_links" exact to="/">COMMUNITY</NavLink>
                    <NavLink className="navbar_menu_links" exact to="/">ABOUT</NavLink>
                    <NavLink className="navbar_menu_links" exact to="/">SUPPORT</NavLink>
                </div>
            </div>

            {/* Auth Links */}
            <div className="auth_links">
                {sessionLinks}
            </div>
        </div>
    );
}

export default Navigation;