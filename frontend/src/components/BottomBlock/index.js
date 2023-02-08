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
                <p>Looking for Recommendations?</p>
            </>
        )
    }

    return homeContent;
}

export default BottomBlock;