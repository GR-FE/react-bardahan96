import { useState } from 'react'


import './App.css'
import NotesApp from './app/notesApp'

import store from './app/redux/store';


function App() {

  console.log("hey");

  return (
    <>

    <NotesApp/>

    </>
  )
}

export default App
