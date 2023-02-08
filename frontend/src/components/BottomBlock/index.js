import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import './BottomBlock.css';
import logo from '../../assets/steam-icon-14885.png'

function BottomBlock() {
    const sessionUser = useSelector(state => state.session.user);

    let homeContent;

    if (sessionUser) {
        homeContent = (
            <>
                <div className="loggedin-content">
                    <div className="loggedin-home-content">
                        <img className="img" src={logo} alt=""></img>
                        <div className="text1">Keep scrolling for more recommendations</div>
                        <div className="text2">Below, you'll find a variety of titles that you may be interested in from categories across Mist</div>
                    </div>
                </div>
            </>
        )
    } else {
        homeContent = (
            <>
                <div className="loggedout-content">
                    <div className="home-content">
                        <div className="content-title">Looking for recommendations?</div>
                    </div>

                    <div className="home-content">
                        <div className="sign-in-content">
                            <br />
                            Sign in to view personalized recommendations
                            <div class="button-content">
                                <div>
                                    <NavLink className="login-button" to="/login">
                                        <span>Sign In</span>
                                    </NavLink>
                                </div>
                                <br />
                                <br />
                                <div className="bottom-content">Or &nbsp;<NavLink className="signup-button" to="/signup">sign up</NavLink>&nbsp; and join Mist for free</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return homeContent;
}

export default BottomBlock;