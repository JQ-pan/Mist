import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import * as sessionActions from '../../store/session';

const ProfileButton = ({ user }) => {
    // const dispatch = useDispatch();
    // const [showMenu, setShowMenu] = useState(false);

    // const openMenu = () => {
    //     if (showMenu) return;
    //     setShowMenu(true);
    // };

    // useEffect(() => {
    //     if (!showMenu) return;

    //     const closeMenu = () => {
    //         setShowMenu(false);
    //     };

    //     document.addEventListener('click', closeMenu);

    //     return () => document.removeEventListener("click", closeMenu);
    // }, [showMenu]);

    // const logout = (e) => {
    //     e.preventDefault();
    //     dispatch(sessionActions.logout());
    // };

    // return (
    //     <>
    //         <button onClick={openMenu}>
    //             <span className="username">{user.username}</span>
    //         </button>
    //         {showMenu && (
    //             <ul className="profile-dropdown">
    //                 <li>{user.username}</li>
    //                 <li>{user.email}</li>
    //                 <li>
    //                     <button onClick={logout}>Log Out</button>
    //                 </li>
    //             </ul>
    //         )}
    //     </>
    // );

    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    const menu = (
        <div className="profile-button-dropdown">
            <span className="logoutButton" onClick={handleLogout}>Log Out</span>
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