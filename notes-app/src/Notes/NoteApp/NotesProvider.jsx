import { useEffect, useState } from "react";
import { NotesContext } from "./NotesContext";
import { UsersContext } from "../Users.jsx/UsersContext";
import { useContext } from "react";

export default function NotesProvider({children}) {

const { users , user } = useContext(UsersContext)

useEffect(() => {
    console.log("this is the array of users", users);
    console.log(" this is the user:  ",user);
})

    const [sharedNotesStorage, setSharedStorage] = useState([])

    useEffect(() => {
        const savedNotes = localStorage.getItem(`${user} Note`);
        if (savedNotes) {
          setSharedStorage(JSON.parse(savedNotes));
        } else {
          setSharedStorage([]);
        }
      }, [user]);
      


    const updateStorage = (recievedData) => {
        setSharedStorage(recievedData)
    }

    return (
        <NotesContext.Provider value={{sharedNotesStorage , updateStorage}}>
            {children}
        </NotesContext.Provider>
    )
    
};
