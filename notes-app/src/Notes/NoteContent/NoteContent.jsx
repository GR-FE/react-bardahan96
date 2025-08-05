import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { NotesContext } from "../NoteApp/NotesContext";

export default function NoteContent({ clickedId}) {
  const { sharedNotesStorage, updateStorage } = useContext(NotesContext);
  const [note, setNote] = useState(null);
  const [isSaved, setIsSaved] = useState(false);


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
            <input
              className="inputNote"
              id="Note"
              type="text"
              name="Note"
              value={note.Note}
              placeholder="Your content here"
              onChange={handleChange}
              onBlur={handleSave}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
