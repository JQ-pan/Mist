import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { fetchLibraryItems } from "../../store/libraryItem";
import LibraryItem from "./LibraryItem";
import "./LibraryPage.css"

const LibraryPage = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);

    const libraryItemsArray= useSelector(state => state.libraryItems ? Object.values(state.libraryItems) : []);

    const libraryItems = libraryItemsArray.map(libraryItem => <LibraryItem libraryItem={libraryItem} key={libraryItem.id} />);
    console.log(libraryItems);
    useEffect(() => {
        dispatch(fetchLibraryItems());
    }, [dispatch])
    console.log("library-page")

    if (!currentUser) {
        return <Redirect to="login" />;
    } else {
        return (
            <div className="library-page-content">
                <h1>Library</h1>
                {libraryItems}
                <div>
                    {libraryItemsArray.title}
                </div>
            </div>
        )
    }
}

export default LibraryPage;