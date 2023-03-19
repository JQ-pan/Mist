import { Link } from 'react-router-dom';
import './LibraryItem.css';

const LibraryItem = ({ libraryItem }) => {

    return (
        <div className="library-item-background">
            {libraryItem.title}
        </div>
    )
}

export default LibraryItem;