import { configureStore } from "@reduxjs/toolkit";
import notesReducer from './notesSlice'
import usersReducer from './usersSlice'


 const store = configureStore({
	reducer: {
        usersController: usersReducer,
		notesStorage: notesReducer
		
	},
});

export default store
