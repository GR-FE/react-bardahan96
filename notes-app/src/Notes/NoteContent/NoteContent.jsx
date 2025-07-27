import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useParams } from "react-router";




export default function NoteContent({sharedStorage, clickedId}) {

    console.log(clickedId);
        const select = [...sharedStorage].find((note) => note.id == clickedId)

       console.log(select);

        useEffect(() => {
            console.log(select);
        },[])

        console.log(select);


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
