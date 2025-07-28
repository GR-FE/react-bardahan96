import { useState } from 'react'

import './App.css'
import { BrowserRouter } from 'react-router'
import NotesApp from './Notes/NoteApp/NotesApp'

import NotesProvider from './Notes/NoteApp/NotesProvider';


function App() {
  

  return (
    <>
    <NotesProvider>
        <NotesApp/>
    </NotesProvider>        
   
    </>
  )
}

export default App
