import { useEffect, useState } from "react";
import { useLocation } from "react-router";





export default function NoteContent({sharedStorage, clickedName}) {
    const [shared , setShared] = useState([])



   

    useEffect(() => {
        const shared1 = sharedStorage
        console.log("shared" , shared1);
        setShared(prev=> [...prev, shared1])
        
    }, [])

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
