import { useState } from 'react'

import './App.css'
import { BrowserRouter } from 'react-router'
import NotesApp from './Notes/NoteApp/NotesApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NotesApp/>
    </>
  )
}

export default App
