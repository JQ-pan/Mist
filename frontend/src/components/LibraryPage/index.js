import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Redirect } from "react-router-dom";
import { fetchLibraryItems } from "../../store/libraryItem";
import LibraryItem from "./LibraryItem";
import demoIcon from '../../assets/png-transparent-robotic-process-automation-computer-icons-robotics-roboto-electronics-silhouette-black.png'
import "./LibraryPage.css"

const LibraryPage = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);

    const libraryItemsArray = useSelector(state => state.libraryItems ? Object.values(state.libraryItems) : []);

    const libraryItems = libraryItemsArray.map(libraryItem => <LibraryItem libraryItem={libraryItem} key={libraryItem.id} />);
    useEffect(() => {
        dispatch(fetchLibraryItems());
    }, [dispatch])

    if (!currentUser) {
        return <Redirect to="login" />;
    } else {
        return (
            <div className="library-page-background">
                <div className="library-page-content">
                    <div className="library-header">
                        <img className="library-profile-pic" src={demoIcon} alt=""></img>
                        <div className="library-profile-header">
                            <span className="profile-header-username">{currentUser.username} </span>
                            <span className="profile-header-arrow">» </span>
                            <a href="/" className="profile-link-to-home">Games</a>
                        </div>

                    </div>
                    {libraryItems}
                </div>
            </div>
        )
    }
}

export default LibraryPage;