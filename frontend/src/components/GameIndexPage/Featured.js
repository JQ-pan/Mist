import { useState, useEffect } from "react";
import FeaturedItem from "./FeaturedItem";
import './Featured.css';

const Featured = ({ games }) => {
    const [counter, setCounter] = useState(1);
    const [pause, setPause] = useState(false);

    const handleNext = () => {
        if (counter !== games.length) {
            setCounter(counter + 1);
        } else {
            setCounter(1);
        }
    };

    const handlePre = () => {
        if (counter !== 1) {
            setCounter(counter - 1);
        } else {
            setCounter(games.length);
        }
    };

    const handlePage = page => {
        setCounter(page);
    };

    const handleMouse = () => {
        setPause(!pause);
    }

    // useEffect(() => {
    //     let interval = setInterval(() => {
    //         if (!pause) {
    //             handleNext();
    //         } else {
    //             clearInterval(interval);
    //         }
    //     }, 6000);
    //     return () => clearInterval(interval);
    // })



    return (
        <div className="carousel-background">
            <div className="carousel">

                <div className="inner"
                    onMouseEnter={handleMouse}
                    onMouseLeave={handleMouse}
                >
                    <button className="arrow left" onClick={handlePre}>
                        <div></div>
                    </button>
                    <button className="arrow right" onClick={handleNext}>
                        <div></div>
                    </button>
                        {games.map((game, i) =>
                            <div className={counter - 1 === i ? "show" : "not-show"}>
                                <FeaturedItem
                                    game={game}
                                    isActive={counter - 1 === i}
                                    key={i}
                                />
                            </div>
                        )}
                </div>

                <div className="page">
                    {games.map((game, i) => (
                        <span
                            className={counter - 1 === i ? "dot displayed" : "dot"}
                            onClick={() => handlePage(i + 1)}
                            key={i}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Featured;