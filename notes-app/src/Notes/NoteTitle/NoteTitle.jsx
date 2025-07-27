import { useEffect, useState, useLocalStorage } from "react";
import { BrowserRouter, NavLink, Link } from "react-router";
import { useNavigate } from "react-router";
import './NoteTitle.css'
import LowPriority from "./Priority/LowPriority";
import MediumPriority from "./Priority/MediumPriority";
import HighPriority from "./Priority/HighPriority";
import { Navigate } from "react-router";
import { useParams } from "react-router";
export default function NoteTitle({sharedStorage, noteName, noteId}) {


    console.log([...sharedStorage].map((noteIt) => noteIt.id));
  

    const lowPriority =  [...sharedStorage].filter((note) => note.priority == "lowPriority")
    const mediumPriority =  [...sharedStorage].filter((note) => note.priority == "mediumPriority")
    const highPriority =  [...sharedStorage].filter((note) => note.priority == "highPriority")

    const title = [...sharedStorage].filter((note) => note.id == noteName)
    console.log(sharedStorage);
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



