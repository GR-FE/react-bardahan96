import { useState } from 'react'

import './App.css'
import { BrowserRouter } from 'react-router'
import NotesApp from './Notes/NoteApp/NotesApp'

import NotesProvider from './Notes/NoteApp/NotesProvider';
import UsersProvider from './Notes/Users.jsx/UsersProvider';


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
