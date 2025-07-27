import AddBtn from "./addBtn"
import NoteTitle from "../NoteTitle/NoteTitle"

export default function SideBar({noteId, sharedStorage , isMobile}) {



    return (
        <div className="sideBar">
        {!isMobile && <h1>My Notes App</h1>}
        <AddBtn/>
        <NoteTitle noteId={noteId} sharedStorage={sharedStorage}/>
    </div>
    )
                   
};
