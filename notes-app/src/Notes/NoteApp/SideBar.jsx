import AddBtn from "./addBtn"
import NoteTitle from "../NoteTitle/NoteTitle"

export default function SideBar({noteName, sharedStorage , isMobile}) {



    return (
        <div className="sideBar">
        {!isMobile && <h1>My Notes App</h1>}
        <AddBtn/>
        <NoteTitle noteName={noteName} sharedStorage={sharedStorage}/>
    </div>
    )
                   
};
