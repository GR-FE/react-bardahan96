import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { NotesContext } from "../NoteApp/NotesContext";


export default function NoteContent({ clickedId}) {
  const { sharedNotesStorage, updateStorage } = useContext(NotesContext);
  const [note, setNote] = useState(null);
  const [isSaved, setIsSaved] = useState(false);

  const id = useParams()

  useEffect(() => {
      console.log("note content use params : " , id);
  }, [])


  useEffect(() => {
    const selectedNote = sharedNotesStorage.find((note) => note.id === clickedId);
    setNote(selectedNote);
  }, [clickedId, sharedNotesStorage]);

  const handleChange = (e) => {
    setNote((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleSave = () => {
    const updatedNotes = sharedNotesStorage.map((n) =>
      n.id === note.id ? note : n
    );
    updateStorage(updatedNotes);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  if (!note) return;

  return (
    <div className="noteForm">
      <form >
        <div className="formContainer">
          <span className="saved">{isSaved && "Saved!"}</span>

          <div className="inputBox">
            <label htmlFor="title">Title</label>
            <input
              className="inputTitle"
              id="title"
              type="text"
              name="title"
              value={note.title}
              placeholder="Your title here"
              onChange={handleChange}
              onBlur={handleSave}
            />
          </div>

          <div className="inputBox">
            <label htmlFor="priority">Priority</label>
            <select
              className="inputPriority"
              name="priority"
              id="priority"
              value={note.priority}
              onChange={handleChange}
              onBlur={handleSave}
            >
              <option disabled value="">Choose...</option>
              <option value="highPriority">High Priority</option>
              <option value="mediumPriority">Medium Priority</option>
              <option value="lowPriority">Low Priority</option>
            </select>
          </div>

          <div className="inputBox">
            <label htmlFor="Note">Note</label>
            <textarea
              className="inputNote"
              id="Note"
              type="text"
              name="Note"
              value={note.Note}
              aria-placeholder="Your content here"
              onChange={handleChange}
              onBlur={handleSave}
            />
          </div>
        </div>
      </form>
    </div>
  );
}







// comare

// import { useEffect, useState, useContext } from "react";
// import { useParams } from "react-router";
// import { NotesContext } from "../NoteApp/NotesContext";

// export default function NoteContent({ clickedId}) {
//   const { sharedNotesStorage, updateStorage } = useContext(NotesContext);
//   const [note, setNote] = useState(null);
//   const [isSaved, setIsSaved] = useState(false);


//   useEffect(() => {
//     const selectedNote = sharedNotesStorage.find((note) => note.id === clickedId);
//     setNote(selectedNote);
//   }, [clickedId, sharedNotesStorage]);

//   const handleChange = (e) => {
//     setNote((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };


//   const handleSave = () => {
//     const updatedNotes = sharedNotesStorage.map((n) =>
//       n.id === note.id ? note : n
//     );
//     updateStorage(updatedNotes);
//     setIsSaved(true);
//     setTimeout(() => setIsSaved(false), 2000);
//   };

//   if (!note) return;

//   return (
//     <div className="noteForm">
//       <form >
//         <div className="formContainer">
//           <span className="saved">{isSaved && "Saved!"}</span>

//           <div className="inputBox">
//             <label htmlFor="title">Title</label>
//             <input
//               className="inputTitle"
//               id="title"
//               type="text"
//               name="title"
//               value={note.title}
//               placeholder="Your title here"
//               onChange={handleChange}
//               onBlur={handleSave}
//             />
//           </div>

//           <div className="inputBox">
//             <label htmlFor="priority">Priority</label>
//             <select
//               className="inputPriority"
//               name="priority"
//               id="priority"
//               value={note.priority}
//               onChange={handleChange}
//               onBlur={handleSave}
//             >
//               <option disabled value="">Choose...</option>
//               <option value="highPriority">High Priority</option>
//               <option value="mediumPriority">Medium Priority</option>
//               <option value="lowPriority">Low Priority</option>
//             </select>
//           </div>

//           <div className="inputBox">
//             <label htmlFor="Note">Note</label>
//             <textarea
//               className="inputNote"
//               id="Note"
//               type="text"
//               name="Note"
//               value={note.Note}
//               aria-placeholder="Your content here"
//               onChange={handleChange}
//               onBlur={handleSave}
//             />
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }


import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./NoteForm.css";
import UserModal from "./UserModal";
export default function NoteForm({ addNote, updateNote, notes }) {
  const { id } = useParams();

  const navigate = useNavigate();
  
  // const selectedNote = notes.find((n) => n.id === id);
  const selectedNote = useMemo(() => {
    return notes.find(n => String(n.id) === String(id))
  },[notes, id]);

  console.log(`ID:`,id);
  console.log(`selected:`,selectedNote);
  console.log(`notes:`,notes);

  const [noteDetails, setNoteDetails] = useState({
    // id: Date.now(),
    id: Date.now().toString(),
    title: "",
    content: "",
    priority: "",
  });

  const [saved, setSaved] = useState(false);
// console.log(db);

  function resetNote() {
   if (notes.length === 0) return; // חכה שהנתונים יגיעו
    setNoteDetails({
      // id: Date.now(),
      id:Date.now().toString(),
      title: "",
      content: "",
      priority: "",
    });
  }

  //if this is not new note I set the values else I reset it
  useEffect(() => {

    // console.log("stam");
    if (selectedNote) {
      
      setNoteDetails({
        id: selectedNote.id,
        title: selectedNote.title,
        content: selectedNote.content,
        priority: selectedNote.priority,
      });
    } else {
      //fixed the bug: If I cheanging exist note and then creat new one its taking the old id
      resetNote();
    }

    setSaved(false);
  }, [id]);

  function handleSave() {
    console.log("handleSave");
    
    if (!selectedNote) {
      addNote(noteDetails);
      navigate(`/note/${noteDetails.id}`);
      // setSaved(true);
    } else {
      updateNote(noteDetails);

      setSaved(true);
    }
  }

  return (
    <>
    <div className="user-container">
      <UserModal/>
    </div>
      <form>
        <div className="save-note-container">{saved && <p className="save-note">Saved!</p>}</div>
        <div className="title-container">
          <p>Title </p>
          <textarea
            id={noteDetails.id}
            className="title"
            placeholder="Your title here"
            onBlur={handleSave}
            onChange={(e) => {
              setNoteDetails((prev) => ({
                ...prev,
                title: e.target.value,
              }));
            }}
            value={noteDetails.title}
          />
        </div>

        <div className="priority-container">
          <p>Priority</p>
          <select
          className="priority"
            name="priority"
            id={noteDetails.id}
            value={noteDetails.priority}
            onBlur={handleSave}
            onChange={(e) => {
              
              setNoteDetails((prev) => ({
                ...prev,
                priority: e.target.value,
              }));
             
            }}
            
          >
            <option value="" disabled hidden>
              Priority
            </option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="content-container">
          <p>Note </p>
          <textarea
            id={noteDetails.id}
            className="content"
            placeholder="Your title here"
            onBlur={handleSave}
            onChange={(e) => {
              setNoteDetails((prev) => ({
                ...prev,
                content: e.target.value,
              }));
            }}
            value={noteDetails.content}
          />
        </div>
      </form>
    </>
  );
}