import { useContext } from "react";
import { UiContext } from "../app/UiContext/UiContext";
import AddBtn from "./AddBtn";
import NotesList from "./NotesList";
import '../MOBILE/mobile.css'


export default function SideBar() {

const { isMobile } = useContext(UiContext)

    return (
        <>
        {!isMobile && <h1>My Notes App</h1> }
        <AddBtn/>
        <NotesList/>
        </>
    )

};
