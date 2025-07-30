import { useEffect, useState } from "react";
import { NotesContext } from "./NotesContext";
import { UsersContext } from "../Users.jsx/UsersContext";
import { useContext } from "react";

export default function NotesProvider({children}) {

const { users , user , uploadUser } = useContext(UsersContext)


    const [sharedNotesStorage, setSharedStorage] = useState([])

    useEffect(() => {
        
        const savedNotes = localStorage.getItem(`${uploadUser} Note`);
        if (savedNotes) {
          setSharedStorage(JSON.parse(savedNotes));
        } else {
          setSharedStorage([]);
        }
      }, [uploadUser]);
      


    const updateStorage = (recievedData) => {
        setSharedStorage(recievedData)
    }

    return (
        <NotesContext.Provider value={{sharedNotesStorage , updateStorage}}>
            {children}
        </NotesContext.Provider>
    )
    
};
