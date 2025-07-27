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
import NoteTitle from "../NoteTitle/NoteTitle";
import { BrowserRouter, NavLink, Route, Routes, useLocation, useNavigate } from "react-router";
import AddBtn from "./addBtn";
import NoteContent from "../NoteContent/NoteContent";
import SideBar from "./SideBar";
import './mobileCss.css'
import TopBar from "./topBar";
import { Navigate } from "react-router";


export default function NotesApp() {

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


useEffect(() => {
    defineTypeOfView()
}, [])

function handleClickedId (e) {
    console.log("this id is :" , e.currentTarget.id);
    const id = e.currentTarget.id
    
    setClickedId(id)
}

console.log(clickedId);




    const updateNoteForm = (recieveData) => {
        setUpdateForm(prev => [...prev , recieveData])
    }

console.log(updateForm);
    
    useEffect(() => {
        if(updateForm.length > 0) {
            localStorage.setItem("Note" , JSON.stringify(updateForm))
        }     
    }, [updateForm])


  

    if (!isMobile) {
        return (
            <div className="notesContainer">
                <BrowserRouter>
                    <SideBar noteId={handleClickedId} sharedStorage={updateForm}/>

                    <div className="mainNote">
                        <Routes>
                            <Route path="Note" element={<Note updateNote={updateNoteForm}/>}/>
                            <Route path={`/NoteContent/${clickedId}`} element={<NoteContent clickedId={clickedId} sharedStorage={updateForm}/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
    

    if(isMobile) {
        return (
            <BrowserRouter>

            <TopBar clickedId={clickedId} sharedStorage={updateForm}/>

 
                <div className="underLine"></div>
                
                <Routes>
                    
                    <Route path="" element={ <SideBar isMobile={isMobile} noteId={handleClickedId} sharedStorage={updateForm}/>}/>
                    
                    <Route path="Note" element={<Note isMobile={isMobile} updateNote={updateNoteForm}/>}/>
                    <Route path={`/NoteContent/${clickedId}`} element={<NoteContent clickedId={clickedId} sharedStorage={updateForm}/>}/>
                    
                   
                    
                </Routes>
            </BrowserRouter>
        )
    }
};
