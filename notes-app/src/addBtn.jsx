import './NotesApp.css'
import { NavLink } from 'react-router'
export default function AddBtn() {

    return (
        <div className='addNoteContainer'>
            <NavLink className="addNote" to="Note"><button>+ Add note</button></NavLink>
        </div>
    )
    
};
