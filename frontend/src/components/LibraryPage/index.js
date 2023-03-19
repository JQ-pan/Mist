import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { fetchLibraryItems } from "../../store/libraryItem";
import "./LibraryPage.css"

const LibraryPage = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);

    const libraryItemsArray= useSelector(state => state.libraryItems ? Object.values(state.libraryItems) : []);

    const libraryItems = libraryItemsArray.map(libraryItem => <LibraryItem cartItem={libraryItem} key={libraryItem.id} />);

    useEffect(() => {
        dispatch(fetchLibraryItems());
    }, [dispatch])
    
    if (!currentUser) {
        return <Redirect to="login" />;
    } else {
        return (
            <div className="library-page-content">
                LIBRARY
            </div>
        )
    }
}