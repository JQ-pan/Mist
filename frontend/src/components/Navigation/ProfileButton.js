import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import * as sessionActions from '../../store/session';
import './ProfileButton.css';

const ProfileButton = ({ user }) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    const menu = (
        <div className="profile-button-dropdown">
            <div className="profile-button-dropdown-content">
                <span className="dropdown-element">View profile</span>
                <span className="dropdown-element">Account details</span>
                <span className="dropdown-element" onClick={handleLogout}>Logout</span>
                <span className="dropdown-element">Preferences</span>
                <span className="dropdown-element">Change language</span>
            </div>
        </div>
    )

    const openMenu = () => {
        if (!showMenu) setShowMenu(true);
    }

    useEffect(() => {
        if (showMenu) {
            const closeMenu = () => setShowMenu(false);
            document.addEventListener('click', closeMenu);
            return () => document.removeEventListener('click', closeMenu);
        }
    }, [showMenu])

    return (
        <div className="profile-button-wrapper">

            <button onClick={openMenu} className="profile-button">{sessionUser.username} ▼</button>
            {showMenu ? menu : <></>}
        </div>
    )
}

export default ProfileButton;