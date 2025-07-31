import { useContext } from "react";
import { useEffect, useState } from "react";
import { UsersContext } from "../Users.jsx/UsersContext";
import { NotesContext } from "./NotesContext";

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
