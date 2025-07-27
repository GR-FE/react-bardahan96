import { useEffect, useState } from "react";
import { useLocation } from "react-router";





export default function NoteContent({sharedStorage, clickedName}) {
  

 
        const select = [...sharedStorage].find((note) => note.title == clickedName)

       

        useEffect(() => {
            console.log(select);
        },[])


    return (
        <div>
            {[select].map((note, index) => {
                return <div key={index}>
                    <h2>{note.title}</h2>
                    <p>{note.Note}</p>
                </div>
            })}
        </div>
    )
};
