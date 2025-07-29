import { useState } from 'react'

import './App.css'
import { BrowserRouter } from 'react-router'
import NotesApp from './Notes/NoteApp/NotesApp'
import UsersProvider from './Notes/Users.jsx/UsersProvider';
import NotesProvider from './Notes/NoteApp/NotesProvider';


function App() {
  

  return (
    <>
    <UsersProvider>
    <NotesProvider>
        <NotesApp/>
    </NotesProvider>        
    </UsersProvider>
   
    </>
  )
}

export default App
