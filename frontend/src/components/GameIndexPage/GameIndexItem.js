import React from 'react';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import './GameIndexItem.css';
import { NavLink } from 'react-router-dom';

const GameIndexItem = (props) => {

    return (
        <NavLink className="game-div" exact to={`/${props.game.id}`}>
            <img className="banner" src={props.game.images} alt={""}></img>
            <div className="game-name">{props.game.title}</div>
            <div className="game-price">${props.game.price}</div>
        </NavLink>
    )
}

export default GameIndexItem;