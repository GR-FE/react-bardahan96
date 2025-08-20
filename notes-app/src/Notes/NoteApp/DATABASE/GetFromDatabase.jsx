

import { collection, addDoc, getDocs } from "firebase/firestore";

export default async function getFromDatabase() {

    const projectId = "react-notesapp-74dbc";
    const apiKey = "AIzaSyCJ5AfBSs3fiFsecIpXSlOJAHfTrIXtsJ0";
    
    
      const res = await fetch(
        `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/NotesStorage?key=${apiKey}`
      );
      const data = await res.json();
      
      const notesArry = data.documents ; // fallback if no docs

    return notesArry
    
}




    // async function getNotes () {

    
    // const projectId = "react-notesapp-74dbc";
    // const apiKey = "AIzaSyCJ5AfBSs3fiFsecIpXSlOJAHfTrIXtsJ0";
    
    
    //   const res = await fetch(
    //     `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/NotesStorage?key=${apiKey}`
    //   );
    //   const data = await res.json();
      
    //   const notesArry = data.documents ; // fallback if no docs

    // const notes = notesArry.map((note, index) => {
    //     return note.fields
    // })

    // console.log(JSON.stringify(notes));
    // setSharedStorage(notes)
    // }





        // useEffect(() => {
    //     const savedNotes = localStorage.getItem(`${uploadUser} Note`);
    //         if (savedNotes) {
    //           setSharedStorage(JSON.parse(savedNotes));
    //         } else {
    //           setSharedStorage([]);
    //         }
    //   }, [uploadUser]);

    //   useEffect(() => {
    //     if(sharedNotesStorage.length > 0) {
    //         localStorage.setItem(`${user} Note` , JSON.stringify(sharedNotesStorage))
    //     }     
    // }, [sharedNotesStorage])


// useEffect(() => {
//     getNotes()
    
// }, [])