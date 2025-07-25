// - When clicking "add note" a new note will be created with an empty state.
// - Note should be saved to local storage on "blur" event.
// - When clicking on one of the notes the information of that note should be dispolayed on the form, and should be saved on blur.
// - After saving show the "Saved!" indication.
// - The note name on the list should be the title.
// - Build the Note app responsive UI, try and break down the UI to small components as much as you can.
// - Build the routing, make sure to notice the difference between the mobile version and the desktop version.
import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Note from "./Note";
import './NotesApp.css'
import './Note.css'
import NoteTitle from "./NoteTitle";
import './NoteTitle.css'

import { BrowserRouter, NavLink, Route, Routes, useLocation } from "react-router";
import AddBtn from "./addBtn";
import NoteContent from "./NoteContent";


export default function NotesApp() {

const [updateForm, setUpdateForm] = useState(() => {   
    const savedNotes = localStorage.getItem("Note");
    return savedNotes ? JSON.parse(savedNotes) : ""
})
const [clickedName, setClickedName] = useState()
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


function handleClickedName (e) {
    const value = e.target.textContent
    setClickedName(value)
}

console.log("this is the clicked name" , clickedName);
    
    const updateNoteForm = (recieveData) => {
        setUpdateForm(prev => [...prev , recieveData])
    }
    



    
    useEffect(() => {
        if(updateForm.length > 0) {
            localStorage.setItem("Note" , JSON.stringify(updateForm))
        }
        console.log(updateForm);
        
    }, [updateForm])


    if (!isMobile) {
        return (
            <div className="notesContainer">
                <BrowserRouter>
                    <div className="sideBar">
                        <h1>My Notes App</h1>
                        <AddBtn/>
                        <NoteTitle noteName={handleClickedName} sharedStorage={updateForm}/>
                    </div>

                        <div className="mainNote">
                    <Routes>
                        <Route path="Note" element={<Note updateNote={updateNoteForm}/>}/>
                        <Route path="NoteTitle" element={<NoteTitle/>}/>
                        <Route path="NoteContent" element={<NoteContent clickedName={clickedName} sharedStorage={updateForm}/>}/>
                    </Routes>
                        </div>
                </BrowserRouter>
            </div>
        )
    }
    

    if(isMobile) {
        return (
            <BrowserRouter>

                <div className="noteHeader">
                        <h1>My Notes App</h1>
                    
                </div>

                <Routes>
                    <Route path="" element={<div className="sideBar"> 
                        <AddBtn/>
                        <NoteTitle noteName={handleClickedName} sharedStorage={updateForm}/>
                        </div>}/>
                        <Route path="Note" element={<Note updateNote={updateNoteForm}/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
};
