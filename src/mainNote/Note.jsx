// Note.jsx
import { useDispatch, useSelector } from 'react-redux';
import { updateNotes, saveNote, pushNotes, fetchNotes } from '../app/redux/notesSlice';
import './mainNoteStyle/Note.css';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';

export default function Note({isSaved, setIsSaved}) {
  const dispatch = useDispatch();

  const location =useLocation()
  const  { noteId } = useParams()


    //import state from redux
    const noteData = useSelector((state) => state.notesStorage.noteData);
    const notesStorageData = useSelector((state) => state.notesStorage.notesStorageData);
    const selectedNote =  [...notesStorageData].find((note) => note.id == noteId)
    
  // check if there is id to upload or new note
   useEffect(() => {
    if (!noteId) {
        dispatch(updateNotes({field: "title", value: ""}))
        dispatch(updateNotes({field: "priority", value: ""}))
        dispatch(updateNotes({field: "content", value: ""}))
    }


    if (selectedNote) {
        dispatch(updateNotes({field: "title", value: selectedNote.title}))
        dispatch(updateNotes({field: "priority", value: selectedNote.priority}))
        dispatch(updateNotes({field: "content", value: selectedNote.content}))
    }
   }, [noteId, notesStorageData])

   const selectedUser = useSelector((state) => state.usersController.selectedUser)

   useEffect(() => {
    console.log("note comp selected user :",selectedUser);
   }, [])
  //toggle is is saved
  
useEffect(() => {
    console.log("noteid" , noteId);
}, [noteId])


  const onChange = (field) => (e) =>
    dispatch(updateNotes({ field, value: e.target.value }));

  const onBlurSave = () => {
    const id = noteId || noteData.id || crypto.randomUUID(); // reuse id if exists
    const note = { ...noteData, id };
  
    // local upsert
    dispatch(saveNote(note));
    // Firestore upsert (will update if same id exists)
    dispatch(pushNotes({ noteInfo: note, userID: selectedUser }));
  
    setIsSaved(true);
  };
  
  useEffect(() => {
    console.log(noteData);
    console.log(selectedNote);
  })


  useEffect(() => {
    console.log(notesStorageData);
  }, [notesStorageData])


  useEffect(() => {
    setTimeout(() => {
        setIsSaved(false)
      }, 2000)
  }, [isSaved])

  return (
    <div className="noteForm">
      <div className="formContainer">
      {<span className='saved'>{isSaved && "Saved!"}</span>}
        <div className="inputBox">
          <label htmlFor="title">Title</label>
          <input
            className="inputTitle"
            id="title"
            type="text"
            name="title"
            value={noteData.title}
            onChange={onChange('title')}
            
            placeholder="Your title here"
          />
        </div>

        <div className="inputBox">
          <label htmlFor="priority">Priority</label>
          <select
            className="inputPriority"
            id="priority"
            name="priority"
            value={noteData.priority}
            onChange={onChange('priority')}
            
          >
            <option value="" disabled />
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
            name="Note"
            value={noteData.content}
            onChange={onChange('content')}
            onBlur={onBlurSave}
            placeholder="Your content here"
          />
        </div>

        
      </div>
    </div>
  );
}
