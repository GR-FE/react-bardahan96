// notesSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDocs, collection, setDoc, doc } from 'firebase/firestore';
import { db } from '../DB/firebase';


export const fetchNotes = createAsyncThunk("notesStorage/fetchNotes", async (userID) => {
  const snap = await getDocs(collection(db, "NotesStorage" , userID , "notes"  ));
  const noteData =  snap.docs.map(doc => ({id: doc.id, ...doc.data()}))
  return noteData
})

export const pushNotes = createAsyncThunk("notesStorage/pushNotes", async ({noteInfo, userID}) => {
  const NotesRef = collection(db, "NotesStorage")
    await setDoc(doc(NotesRef, userID, "notes", noteInfo.id ) , {
    title: noteInfo.title,
    priority: noteInfo.priority,
    id: noteInfo.id,
    content: noteInfo.content
  
  }, {merge: true})
  return { userID, note: noteInfo}
  
})

const initialState = {
  noteData: { title: '', priority: '', content: '' },
  notesStorageData: [],
  clickedId: null
  
};

const notesSlice = createSlice({
  name: 'notesStorage',
  initialState,
  reducers: {
    
    updateNotes(state, action) {
      const { field, value } = action.payload;
      state.noteData[field] = value;
    },
    saveNote(state, action) {

      const noteInfo = action.payload;
      const exitingNote = state.notesStorageData.find((note) => note.id === noteInfo.id)
      if (exitingNote) {
        exitingNote.title = noteInfo.title;
        exitingNote.priority = noteInfo.priority;
        exitingNote.content = noteInfo.content
      } else {
      state.notesStorageData.push(noteInfo)
      state.noteData= { title: '' , priority: '' , content: '' }

      }
    },
    getClickedId(state, action) {
      state.clickedId = action.payload
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      state.notesStorageData = action.payload
    })
builder.addCase(pushNotes.fulfilled, (state, action) => {
  const note = action.payload;
  const exitingNote = state.notesStorageData.findIndex(eNote => eNote.id === note.id);
  if (exitingNote >= 0) state.notesStorageData[exitingNote] = note; else state.notesStorageData.push(note);
});
  }
});

export const { updateNotes, saveNote , getClickedId } = notesSlice.actions;
export default notesSlice.reducer;
