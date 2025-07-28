import { useState } from "react";
import { NotesContext } from "./NotesContext";

export default function NotesProvider({children}) {
    const [sharedNotesStorage, setSharedStorage] = useState(() => {   
        const savedNotes = localStorage.getItem("Note");
        return savedNotes ? JSON.parse(savedNotes) : ""
    })

    const updateStorage = (recievedData) => {
        setSharedStorage(recievedData)
    }

    return (
        <NotesContext.Provider value={{sharedNotesStorage , updateStorage}}>
            {children}
        </NotesContext.Provider>
    )
    
};
