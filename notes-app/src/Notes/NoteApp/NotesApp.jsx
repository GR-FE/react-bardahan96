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


export default function NotesApp() {

    const { sharedNotesStorage , updateStorage } = useContext(NotesContext)

    console.log("this is the function of provider cotnext    ",updateStorage);


    console.log(crypto.randomUUID());
    
    const [updateForm, setUpdateForm] = useState(() => {   
        const savedNotes = localStorage.getItem("Note");
        return savedNotes ? JSON.parse(savedNotes) : ""
    })

const [clickedId, setClickedId] = useState()
const [isMobile, setIsMobile] = useState(false)

function defineTypeOfView () {
    const width = window.innerWidth
    if(width < 431) {
        setIsMobile(true)
    }
}



console.log(" this is the context shared storage :     ",sharedNotesStorage);
console.log(" this is the context shared storage :     ",sharedNotesStorage.length);

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
            localStorage.setItem("Note" , JSON.stringify(sharedNotesStorage))
        }     
    }, [sharedNotesStorage])

    console.log("local storage is :    " , localStorage);

  

    if (!isMobile) {
        return (
            <div className="notesContainer">
                <BrowserRouter>
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

            <TopBar clickedId={clickedId}/>

 
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
