import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../assets/steam-icon-14885.png'
import demoIcon from '../../assets/png-transparent-robotic-process-automation-computer-icons-robotics-roboto-electronics-silhouette-black.png'
// import * as sessionActions from '../../store/session/home/jiongqipan/Projects/Mist/frontend/src/assets/icons8-github-50.png';

function Navigation() {
    const sessionUser = useSelector(state => state.session.user);
    let sessionLinks;

    if (sessionUser) {
        sessionLinks = (
            <>
                <ProfileButton user={sessionUser} />
                <div className="profile-pic-background">
                    <img className="profile-pic" src={demoIcon} alt=""></img>
                </div>
            </>
        );
    } else {
        sessionLinks = (
            <div className="login-button-home-container">
                <NavLink className="login-button-nav" to="/login">Log In</NavLink>
            </div>
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
                        {/* <NavLink className="navbar_menu_links" exact to="/">COMMUNITY</NavLink>
                        <NavLink className="navbar_menu_links" exact to="/">ABOUT</NavLink>
                        <NavLink className="navbar_menu_links" exact to="/">SUPPORT</NavLink> */}
                        <a className="navbar_menu_links" href="https://github.com/JQ-pan/Mist.git">GITHUB</a>
                        <a className="navbar_menu_links" href="https://www.linkedin.com/in/jiongqi/">LINKEDIN</a>
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