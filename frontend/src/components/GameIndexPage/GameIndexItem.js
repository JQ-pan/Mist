import React from 'react';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import './GameIndexItem.css';
import { Link } from 'react-router-dom';

const GameIndexItem = (props) => {

    return (
        <Link className="game-div" exact to={`/${props.game.id}`}>
            <img className="banner" src={props.game.images[0]} alt={""}></img>
            <div className="game-name">{props.game.title}</div>
            <div className="game-price">${props.game.price}</div>
        </Link>
    )
}

export default GameIndexItem;