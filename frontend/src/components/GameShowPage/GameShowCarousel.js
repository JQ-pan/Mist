import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import './GameShowCarousel.css';
import { useState, useEffect } from 'react';

function GameShowCarousel({ game }) {

    const images = game.images

    const [counter, setCounter] = useState(1);
    const [pause, setPause] = useState(false);

    const handleNext = () => {
        if (counter !== images.length) {
            setCounter(counter + 1);
        } else {
            setCounter(1);
        }
    };

    const handlePre = () => {
        if (counter !== 1) {
            setCounter(counter - 1);
        } else {
            setCounter(images.length);
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
        }, 6000);
        return () => clearInterval(interval);
    })

    return (
        <div className="game-show-carousel-wrapper">
            <div className="game-show-carousel-slides-wrapper">
                {images.map((url, i) => <img
                        src={url}
                        className={counter - 1 === i ? "show-slide-selected game-show-carousel-image" : "game-show-carousel-image"}
                        alt=""
                    />
                )}
            </div>

            <div className="game-show-carousel-thumbs-wrapper">
                {images.map((url, i) => <img
                        src={url}
                        className={counter - 1 === i ? "show-thumb-selected game-show-carousel-thumb" : "game-show-carousel-thumb"}
                        alt=""
                        onClick={() => handlePage(i + 1)}
                    />
                )}
            </div>
        </div>
    )
}

export default GameShowCarousel;