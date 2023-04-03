import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "../../store/game";
import SearchResults from "./SearchResults";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./StoreNavigation.css"

function StoreNavigation() {
    const dispatch = useDispatch();
    const history = useHistory();
    const games = useSelector(state => Object.values(state.games));

    const [value, setValue] = useState('');
    const [focused, setFocused] = useState(false);

    const onChange = (e) => {
        setValue(e.target.value);
    }

    const onMouseDown = (e) => {
        e.preventDefault();
    }

    const onSearch = (searchTerm) => {
        if (gameTitles.length === 1) {
            history.push(`/${gameTitles[0].id}`)
        }
    }

    // Array of search results
    const gameTitles = games.filter(game => {
        const searchTerm = value.toLowerCase();
        const fullTitle = game.title.toLowerCase();
        return searchTerm && fullTitle.includes(searchTerm)
    })
    const searchResults = gameTitles.slice(0, 5).map((game, i) => <SearchResults key={i} game={game} />);

    // Clears the search input when a new page is rendered
    const location = useLocation();
    useEffect(() => {
        setValue('');
    }, [location]);

    useEffect(() => { dispatch(fetchGames()) }, [dispatch])

    return (
        <div className="store-navbar-container">

            <div className="cart-container">
                <Link className="cart-button-background" exact to={'/cart'}>
                    <div className="cart-button-text">
                        CART
                    </div>
                </Link>
            </div>

            <div className="store-navbar-content">
                <div className="navbar-element">Your Store</div>
                <div className="navbar-element">New & Noteworthy</div>
                <div className="navbar-element">Categories</div>
                <div className="navbar-element">Points Shop</div>
                <div className="navbar-element">News</div>
                <div className="navbar-element">Labs</div>

                <div className="navbar-search">
                    <div className="search-inner">
                        <input
                            type="text"
                            value={value}
                            onChange={onChange}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                            onKeyDown={(e) => {
                                if (e.keyCode == 13) {
                                    onSearch(value)
                                }
                            }}
                            className="navbar-search-bar"
                            placeholder="search" />
                        <a onClick={() => onSearch(value)} > <img src="https://store.akamai.steamstatic.com/public/images/v6/search_icon_btn.png" alt="" /> </a>
                    </div>

                    {focused && (
                        // {(
                        <div
                            className="search-results" onMouseDown={onMouseDown}>
                            {searchResults.length !== 0 && (searchResults)}
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default StoreNavigation;