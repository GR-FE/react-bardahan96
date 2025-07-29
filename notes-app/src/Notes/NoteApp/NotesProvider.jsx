import { useState } from "react";
import { NotesContext } from "./NotesContext";
import { UsersContext } from "../Users.jsx/UsersContext";
import { useContext } from "react";

export default function NotesProvider({children}) {

const { users } = useContext(UsersContext)

    const [sharedNotesStorage, setSharedStorage] = useState(() => {   
        const savedNotes = localStorage.getItem(`${users} Notes`);
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
