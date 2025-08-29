// notesSlice.js
import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getDocs, collection, setDoc, doc , onSnapshot, updateDoc } from 'firebase/firestore';
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
  })
  return  noteInfo
})

export const updateNote = createAsyncThunk("notesStorage/updateNote" , async ({noteInfo, userID}) => {
  const NotesRef = collection(db, "NotesStorage")
  await updateDoc(doc(NotesRef , userID , "notes" , noteInfo.id) , {
    ...noteInfo
  })
  return noteInfo
})

const initialState = {
  noteData: { title: '', priority: '', content: '' },
  notesStorageData: [],
  clickedId: null,
  notePageUrl: null,
  error: null,
  loading: null

  
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
      state.notesStorageData.push(noteInfo)



    },
    getClickedId(state, action) {
      state.clickedId = action.payload
    },
    updateUrlPath (state, action) {
      state.notePageUrl = action.payload
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchNotes.fulfilled, (state, action) => {
      state.loading = false
      state.notesStorageData = action.payload
      
    })
    builder.addCase(pushNotes.fulfilled, (state, action) => {
      state.loading = false
      state.notesStorageData.push(action.payload)

    });
    builder.addCase(updateNote.fulfilled , (state, action) => {
      state.loading =false
      const noteToUpdate = action.payload
      const index = state.notesStorageData.findIndex((note) => note.id == noteToUpdate.id )
      state.notesStorageData[index] = noteToUpdate
    })

    builder.addMatcher( isAnyOf(fetchNotes.pending , pushNotes.pending) , (state) => {
      state.loading = true
      console.log("loading",state.loading)
    })
    builder.addMatcher( isAnyOf(fetchNotes.rejected , pushNotes.rejected) , (state, action) => {
      state.error = action.error?.message 
      console.log(state.error)
    })
  }
});

export const { updateNotes, saveNote , getClickedId } = notesSlice.actions;
export default notesSlice.reducer;
