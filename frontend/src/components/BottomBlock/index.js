import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import './BottomBlock.css';

function BottomBlock() {
    const sessionUser = useSelector(state => state.session.user);

    let homeContent;

    if (sessionUser) {
        homeContent = (
            <>
                <p>Keep scrolling for more recommendations</p>
            </>
        )
    } else {
        homeContent = (
            <>
                <div id="content">
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