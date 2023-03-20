import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { fetchLibraryItems } from "../../store/libraryItem";
import LibraryItem from "./LibraryItem";
import demoIcon from '../../assets/png-transparent-robotic-process-automation-computer-icons-robotics-roboto-electronics-silhouette-black.png'
import "./LibraryPage.css"

const LibraryPage = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);
    if (currentUser) {
        console.log(currentUser);
    }

    const libraryItemsArray= useSelector(state => state.libraryItems ? Object.values(state.libraryItems) : []);

    const libraryItems = libraryItemsArray.map(libraryItem => <LibraryItem libraryItem={libraryItem} key={libraryItem.id} />);
    useEffect(() => {
        dispatch(fetchLibraryItems());
    }, [dispatch])

    if (!currentUser) {
        return <Redirect to="login" />;
    } else {
        return (
            <div className="library-page-content">
                <div className="library-header">
                    <img className="library-profile-pic" src={demoIcon} alt=""></img>
                    <div className="library-username">{currentUser.username}</div>

                </div>
                {libraryItems}
                <div>
                    {libraryItemsArray.title}
                </div>
            </div>
        )
    }
}

export default LibraryPage;