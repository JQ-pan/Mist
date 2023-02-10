import React from 'react';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import './HomeDisplayPage.css';

const GameIndexItem = (props) => {
    console.log(props.game);
    
    return (
        <div className="game-div">
            <div className="game-name">{props.game.title}</div>
            <br/>
            <div className="game-description">{props.game.description}</div>
            <br/>
            <div className="game-developer">{props.game.developer}</div>
            <br/>
            <div className="game-publisher">{props.game.publisher}</div>
            <br/>
            <div className="game-price">{props.game.price}</div>
            <br/>
            <div className="game-release_date">{props.game.release_date}</div>
            <br/>
            <img className="banner" src={props.game.images} alt={""}></img>
            <br/>
        </div>
    )
}

export default GameIndexItem;