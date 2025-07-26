import { useEffect, useState, useLocalStorage } from "react";
import { BrowserRouter, NavLink } from "react-router";
import { useNavigate } from "react-router";
import './NoteTitle.css'
import HighPriority from "./Priority/HighPriority";
import LowPriority from "./Priority/LowPriority";
import MediumPriority from "./Priority/MediumPriority";


export default function NoteTitle({noteName, sharedStorage, isClicked1}) {


    const lowPriority =  [...sharedStorage].filter((note) => note.priority == "lowPriority")
    const mediumPriority =  [...sharedStorage].filter((note) => note.priority == "mediumPriority")
    const highPriority =  [...sharedStorage].filter((note) => note.priority == "highPriority")

    return (
        
        <div className="noteTitles">  
               <HighPriority noteName={noteName} highPriority={highPriority}  />
               <MediumPriority noteName={noteName} mediumPriority={mediumPriority} />
                <LowPriority noteName={noteName} lowPriority={lowPriority} />
        </div>
     )
};



