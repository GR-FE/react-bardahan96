
import { useContext, useEffect } from "react";
import { NotesContext } from "../NoteApp/NotesContext";
import LowPriority from "./Priority/LowPriority";
import MediumPriority from "./Priority/MediumPriority";
import HighPriority from "./Priority/HighPriority";
import './NoteTitle.css'
import { useLocation } from "react-router";


export default function NoteTitle({ noteId}) {

    const location = useLocation()

const {sharedNotesStorage ,noteData } = useContext(NotesContext)
    


    const lowPriority =  [...sharedNotesStorage].filter((note) => note.priority == "lowPriority")
    const mediumPriority =  [...sharedNotesStorage].filter((note) => note.priority == "mediumPriority")
    const highPriority =  [...sharedNotesStorage].filter((note) => note.priority == "highPriority")

    return (        
        <div>
             <div>
                <HighPriority noteId={noteId} highPriority={highPriority}  />
                <MediumPriority noteId={noteId} mediumPriority={mediumPriority} />
                <LowPriority noteId={noteId} lowPriority={lowPriority} />   
             </div>    
        </div>
    )
};



