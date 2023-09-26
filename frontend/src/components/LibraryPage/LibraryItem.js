import { useHistory } from 'react-router-dom';
import './LibraryItem.css';

const LibraryItem = ({ libraryItem }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/game/' + libraryItem.id);
    }

    return (
        <div className="library-item-background">
            <img className="library-item-portrait" src={libraryItem.images[0]} alt="" onClick={handleClick}></img>
            <div className="library-item-content">
                <div className="library-item-title" onClick={handleClick}>{libraryItem.title}</div>
                <div className="library-item-data">
                    <div className="total-played data-column">
                        <div className="column-title">
                            Total Played
                        </div>
                        <div className="column-data">
                            0.0 hours
                        </div>
                    </div>
                    <div className="last-played data-column">
                        <div className="column-title">
                            Last Played
                        </div>
                        <div className="column-data">
                            Mar 1, 2023
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LibraryItem;