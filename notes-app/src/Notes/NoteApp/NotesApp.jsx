// - When clicking "add note" a new note will be created with an empty state.
// - Note should be saved to local storage on "blur" event.
// - When clicking on one of the notes the information of that note should be dispolayed on the form, and should be saved on blur.
// - After saving show the "Saved!" indication.
// - The note name on the list should be the title.
// - Build the Note app responsive UI, try and break down the UI to small components as much as you can.
// - Build the routing, make sure to notice the difference between the mobile version and the desktop version.
//asdasdas
import { useEffect, useState } from "react";
import { useContext } from "react";
import { NotesContext } from "./NotesContext";
// import { UsersContext } from "../Users.jsx/UsersContext";
import { BrowserRouter, NavLink, Route, Routes, useLocation, useNavigate } from "react-router";
import SideBar from "./SideBar";
import Note from "../NoteMain/Note";
import NoteContent from "../NoteContent/NoteContent";
import TopBar from "./topBar";
// import UserModal from "../Users.jsx/UserModal";
// import UserSwitch from "../Users.jsx/UserSwitch";
import './NotesApp.css'
import './mobileCss.css'


export default function NotesApp() {

    const { sharedNotesStorage , updateStorage, pushNotes  } = useContext(NotesContext)
    // const {  isPop } = useContext(UsersContext)

    const [clickedId, setClickedId] = useState()
    const [isMobile, setIsMobile] = useState(false)

    function defineTypeOfView () {
        const width = window.innerWidth
        if(width < 431) {
            setIsMobile(true)
        }
    }

    useEffect(() => {
        defineTypeOfView()
    }, [])

    function handleClickedId (e) {
        const id = e.currentTarget.id  
        setClickedId(id)
    }

    const updateNoteForm = (recieveData) => {

        updateStorage(prev => [...prev , recieveData])
    }

  


    if (!isMobile) {
        return (
            <div className="notesContainer">
                
                
                <BrowserRouter>
                    {/* <UserSwitch/>
                    {(isPop) && <UserModal />} */}
                    <SideBar noteId={handleClickedId} />

                    <div className="mainNote">
                        <Routes>
                        <Route path="Note" element={<Note clickedId={clickedId} updateNote={updateNoteForm}/>}/>
                            <Route path="Note/:noteId" element={<Note clickedId={clickedId} updateNote={updateNoteForm}/>}/>
                            {/* <Route path={`/NoteContent/:noteId`} element={<NoteContent clickedId={clickedId} />}/> */}
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
            
        )
    }
    
    if(isMobile) {
        return (
            <BrowserRouter>
            <   TopBar  clickedId={clickedId}/>   
                <div className="underLine"></div>   
                <Routes>
                    <Route path="" element={ <SideBar isMobile={isMobile} noteId={handleClickedId}/>}/>
                    <Route path="Note" element={<Note isMobile={isMobile} updateNote={updateNoteForm}/>}/>
                    <Route path="Note/:noteId" element={<Note clickedId={clickedId} updateNote={updateNoteForm}/>}/>
                    {/* <Route path={`/NoteContent/:noteId`} element={<NoteContent clickedId={clickedId}/>}/>   */}
                </Routes>
            </BrowserRouter>
        )
    }
};
