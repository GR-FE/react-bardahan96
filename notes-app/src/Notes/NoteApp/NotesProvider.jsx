import { useContext, useMemo } from "react";
import { useEffect, useState } from "react";
// import { UsersContext } from "../Users.jsx/UsersContext";
import { NotesContext } from "../NoteApp/NotesContext"
import getFromDatabase from "./DATABASE/GetFromDatabase";
import { addDoc, collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from '../NoteApp/DATABASE/firebase'



export default function NotesProvider({children}) {






    useEffect(() => {
        async function fetchNotes() {
          const snap = await getDocs(collection(db, "NotesStorage"));
          const notesData = snap.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
              
            }));

            console.log("this is notes data in notes provider:" , notesData);
            
         
          setSharedStorage(notesData)
        }
    
        fetchNotes();
      }, []);


      useEffect(() => {
        console.log("shared storage: ", sharedNotesStorage);
      })




    



// const { users , user , uploadUser } = useContext(UsersContext)

    const [sharedNotesStorage, setSharedStorage] = useState([])


          async function pushNotes(noteInfo) {
        const NotesRef = collection(db, "NotesStorage");
           await setDoc(doc(NotesRef, noteInfo.id), {
            title: noteInfo.title,
            priority: noteInfo.priority,
            Note: noteInfo.Note,
            id: noteInfo.id,
          }); 
      }

      

      const updateStorage = (recievedData) => {
        setSharedStorage(recievedData)
        
    }

    return (
        <NotesContext.Provider value={{sharedNotesStorage , updateStorage , pushNotes}}>
            {children}
        </NotesContext.Provider>
    )
};
