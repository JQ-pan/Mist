import React from 'react';
import './SearchResults.css';
import { Link } from 'react-router-dom';

const SearchResults = (props) => {
    return (
        <Link className="search-game-div" exact to={`/${props.game.id}`}>
            <img className="banner" src={props.game.images[0]} alt={""}></img>
            <div className="game-name">{props.game.title}</div>
        </Link>
    )
}

export default SearchResults;