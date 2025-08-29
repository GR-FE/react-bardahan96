// usersSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDocs, collection, setDoc, doc } from 'firebase/firestore';
import { db } from '../DB/firebase';


export const pushUsers = createAsyncThunk("notesStorage/pushUsers", async (user) => {
    const usersRef = collection(db, "NotesStorage");
    await setDoc(doc(usersRef, user) , {
        username: user

    })
    return user
})

export const fetchUsers = createAsyncThunk("notesStorage/fetchUsers" , async () => {
    const snap = await getDocs(collection(db, "NotesStorage"));
    const userFromDB = snap.docs.map(doc => doc.id)

    return userFromDB
})

const initialState = {
  users: [],
  selectedUser: null,
  isPop: false
  
};

const usersSlice = createSlice({
  name: 'usersController',
  initialState,
  reducers: {
    
    selectUser(state, action) {
      state.selectedUser = action.payload
      
    },
    saveUser(state, action) {
      const newUser = action.payload;
      state.users.push(newUser)
    },
    openModal( state) {
        state.isPop = true
    },
    clsoeModal (state) {
        state.isPop = false
    }


  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload
    })
    builder.addCase(pushUsers.fulfilled, (state,action ) => {
        state.users.push(action.payload)
    })
  }
});

export const { selectUser, saveUser , openModal, clsoeModal } = usersSlice.actions;
export default usersSlice.reducer;
