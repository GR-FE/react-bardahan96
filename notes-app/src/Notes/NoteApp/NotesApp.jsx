// - When clicking "add note" a new note will be created with an empty state.
// - Note should be saved to local storage on "blur" event.
// - When clicking on one of the notes the information of that note should be dispolayed on the form, and should be saved on blur.
// - After saving show the "Saved!" indication.
// - The note name on the list should be the title.
// - Build the Note app responsive UI, try and break down the UI to small components as much as you can.
// - Build the routing, make sure to notice the difference between the mobile version and the desktop version.
import { useEffect, useState } from "react";
import Note from "../NoteMain/Note";
import './NotesApp.css'
import { BrowserRouter, NavLink, Route, Routes, useLocation, useNavigate } from "react-router";
import NoteContent from "../NoteContent/NoteContent";
import SideBar from "./SideBar";
import './mobileCss.css'
import TopBar from "./topBar";
import { useContext } from "react";
import { NotesContext } from "./NotesContext";
import { UsersContext } from "../Users.jsx/UsersContext";
import UserModal from "../Users.jsx/UserModal";


export default function NotesApp() {

    const { sharedNotesStorage , updateStorage } = useContext(NotesContext)


const [isPop, setIsPop] = useState(false)
const [clickedId, setClickedId] = useState()
const [isMobile, setIsMobile] = useState(false)
const [overlay, setOverlay] = useState("gray")

function defineTypeOfView () {
    const width = window.innerWidth
    if(width < 431) {
        setIsMobile(true)
    }
}

const { users , user , uploadUser } = useContext(UsersContext)


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


    
    useEffect(() => {
        if(sharedNotesStorage.length > 0) {
            localStorage.setItem(`${user} Note` , JSON.stringify(sharedNotesStorage))
        }     
    }, [sharedNotesStorage])


    const openModal = () => {
        setIsPop(true)
    }

  

    if (!isMobile) {
        return (
            <div className="notesContainer">
                <BrowserRouter>
                    <div className="switchContainer">
                        <button onClick={openModal} >Switch</button>
                        <div><span>{uploadUser}</span></div>
                    </div>
                    

                    {(isPop) && <UserModal />}
                    <SideBar noteId={handleClickedId} />

                    <div className="mainNote">
                        <Routes>
                            <Route path="Note" element={<Note updateNote={updateNoteForm}/>}/>
                            <Route path={`/NoteContent/${clickedId}`} element={<NoteContent clickedId={clickedId} />}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
    

    if(isMobile) {
        return (
            <BrowserRouter>

            <TopBar  clickedId={clickedId}/>

                
                <div className="underLine"></div>
                
                <Routes>
                    
                    <Route path="" element={ <SideBar isMobile={isMobile} noteId={handleClickedId}/>}/>
                    
                    <Route path="Note" element={<Note isMobile={isMobile} updateNote={updateNoteForm}/>}/>
                    <Route path={`/NoteContent/${clickedId}`} element={<NoteContent clickedId={clickedId}/>}/>
                    
                   
                    
                </Routes>
            </BrowserRouter>
        )
    }
};
