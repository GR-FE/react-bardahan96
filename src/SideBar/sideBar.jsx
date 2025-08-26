import AddBtn from "./AddBtn";
import NotesList from "./NotesList";
import '../MOBILE/mobile.css'


export default function SideBar({isMobile}) {

    return (
        <>
        {!isMobile && <h1>My Notes App</h1>}
        <AddBtn/>
        <NotesList/>
        </>
    )

};
