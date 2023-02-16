import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { useDispatch } from 'react-redux';
import './Navigation.css';
import logo from '../../assets/steam-icon-14885.png'
import demoIcon from '../../assets/png-transparent-robotic-process-automation-computer-icons-robotics-roboto-electronics-silhouette-black.png'
import * as sessionActions from '../../store/session';

function Navigation() {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    let sessionLinks;

    // const handleLogout = (e) => {
    //     e.preventDefault();
    //     dispatch(sessionActions.logout());
    // };

    if (sessionUser) {
        sessionLinks = (
            <>
                <ProfileButton user={sessionUser} />
                {/* <button className="logoutButton" onClick={handleLogout}>Log Out</button> */}
                <div className="profile-pic-background">
                    <img className="profile-pic" src={demoIcon} alt=""></img>
                </div>

            </>
        );
    } else {
        sessionLinks = (
            <>
                <NavLink className="loginButton" to="/login">Log In</NavLink>
            </>
        );
    }

    return (
        <div className="navbar-container">
            <div className="navbar-content">
                <div className="navbar-logo">
                    {/* Logo and Link to home page  */}
                    <NavLink className="link" exact to="/">
                        <img className="app-logo" src={logo} alt="" />
                        <p className="title">MIST</p>
                    </NavLink>

                    <div className="navbar_menu">
                        <NavLink className="navbar_menu_links" exact to="/">STORE</NavLink>
                        <NavLink className="navbar_menu_links" exact to="/">COMMUNITY</NavLink>
                        <NavLink className="navbar_menu_links" exact to="/">ABOUT</NavLink>
                        <NavLink className="navbar_menu_links" exact to="/">SUPPORT</NavLink>
                    </div>
                </div>

                <div className="auth-links">
                    {sessionLinks}
                </div>
            </div>
        </div>
    );
}

export default Navigation;