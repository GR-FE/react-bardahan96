import { NavLink } from 'react-router'
import './NotesApp.css'

export default function AddBtn() {

    return (
        <div className='addNoteContainer'>
            <NavLink className="addNote" to="Note"><button className='AddNoteBtn'>+ Add note</button></NavLink>
        </div>
    )
    
};
