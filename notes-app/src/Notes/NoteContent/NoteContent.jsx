import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useParams } from "react-router";
import { useContext } from "react";
import { NotesContext } from "../NoteApp/NotesContext";


export default function NoteContent({ clickedId}) {

    const { sharedNotesStorage } = useContext(NotesContext);
     const select = [...sharedNotesStorage].find((note) => note.id == clickedId)

    return (
        <div>
            {[select].map((note) => {
                return <div key={note.id}>
                    <h2>{note.title}</h2>
                    <p>{note.Note}</p>
                </div>
            })}
        </div>
    )
};
