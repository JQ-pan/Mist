import { useState, useEffect } from "react";
import FeaturedItem from "./FeaturedItem";
import './Featured.css';

const Featured = ({ games }) => {
    const [counter, setCounter] = useState(1);
    const [pause, setPause] = useState(false);

    const handleNext = () => {
        console.log("next: ", counter)
        if (counter !== games.length) {
            setCounter(counter + 1);
        } else {
            setCounter(1);
        }
    };

    const handlePre = () => {
        console.log("pre: ", counter)
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

    useEffect(() => {
        let interval = setInterval(() => {
            if (!pause) {
                handleNext();
            } else {
                clearInterval(interval);
            }
        }, 3000);
        return () => clearInterval(interval);
    })



    return (
        <div className="carousel">
            <button className="left" onClick={handlePre}>
                <span>&#10094;</span>
            </button>
            <button className="right" onClick={handleNext}>
                <span>&#10095;</span>
            </button>

            <div className="inner"
                onMouseEnter={handleMouse}
                onMouseLeave={handleMouse}
            >
                {games.map((game, i) =>
                    <div className={counter - 1 === i ? "show" : "not-show"}>
                        <FeaturedItem
                            game={game}
                            key={i}
                        />
                    </div>
                )}
            </div>

            <div className="page">
                {games.map((game, i) => (
                    <span
                        className={counter - 1 === i ? "dot active" : "dot"}
                        onClick={() => handlePage(i + 1)}
                        key={i}
                    />
                ))}
            </div>
        </div>
    )
}

export default Featured;