// Note.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { updateNotes, pushNotes, updateNote } from '../app/redux/notesSlice';
import './mainNoteStyle/Note.css';

export default function Note() {
  const dispatch = useDispatch();
  const { noteId } = useParams();

  // import states from redux
  const noteData = useSelector((state) => state.notesStorage.noteData);
  const notesStorageData = useSelector((state) => state.notesStorage.notesStorageData);
  const selectedUser = useSelector((state) => state.usersController.selectedUser);
  const selectedNote = notesStorageData.find((note) => note.id === noteId);

  const [isSaved,setIsSaved] = useState(false)

  useEffect(() => {
    if (selectedNote) {

      dispatch(updateNotes({ field: "id", value: selectedNote.id }));
      dispatch(updateNotes({ field: "title", value: selectedNote.title }));
      dispatch(updateNotes({ field: "priority", value: selectedNote.priority }));
      dispatch(updateNotes({ field: "content", value: selectedNote.content }));
    } else {
      dispatch(updateNotes({ field: "id", value: null }));
      dispatch(updateNotes({ field: "title", value: "" }));
      dispatch(updateNotes({ field: "priority", value: "" }));
      dispatch(updateNotes({ field: "content", value: "" }));
    }
  }, [noteId, notesStorageData, dispatch, selectedNote]);

  const onChange = (field) => (e) => dispatch(updateNotes({ field, value: e.target.value }));


  const onBlurSave = () => {

    if ( !noteId && noteData.title.length > 0 && noteData.priority.length > 0 && noteData.content.length > 0) {
       const newId = crypto.randomUUID();
       const note = { ...noteData, id: newId };
       dispatch(pushNotes({ noteInfo: note, userID: selectedUser }));
     setIsSaved(true)
     return
    } 
    if (noteId) {
      dispatch(updateNote({ noteInfo: { ...noteData, id: noteId }, userID: selectedUser }));
      setIsSaved(true);
    }   
  };
  
  useEffect(() => {
     setTimeout(() => {
      setIsSaved(false);
    }, 2000);
     
  }, [isSaved]);

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
            onBlur={onBlurSave}
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
            onBlur={onBlurSave}
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