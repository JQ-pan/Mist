import React from 'react';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import './GameIndexItem.css';

const GameIndexItem = (props) => {
    console.log(props.game);

    return (
        <div className="game-div">
            <img className="banner" src={props.game.images} alt={""}></img>
            <div className="game-name">{props.game.title}</div>
            <div className="game-price">{props.game.price}</div>
        </div>
    )
}

export default GameIndexItem;