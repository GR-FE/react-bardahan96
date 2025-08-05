import { useEffect, useState } from 'react';
import './Note.css'
import { useNavigate } from 'react-router';
import { forwardRef , useImperativeHandle } from 'react';
import { useLocation } from 'react-router';
import { UsersContext } from '../Users.jsx/UsersContext';
import { useContext } from 'react';

export default function Note({updateNote}) {

    const [isSaved, setIsSaved] = useState(false)
    const [noteData, setNoteData] = useState([])

    const { user } = useContext(UsersContext)

    const handleForm = (e) => {
        const id = crypto.randomUUID()
        const userName = user
        setNoteData({
            ...noteData, [e.target.name]: e.target.value , id , userName 
        })   
    }

    const updateForm = () => { 
        if (noteData.title == 0) return     
        setIsSaved(true)
        updateNote(noteData)
        setTimeout(() => {
            setIsSaved(false)
        }, 2000);
        clearInput()
    }



        const clearInput = () => {
        setNoteData({
        title: "" , 
        Note: "" , 
        priority: ""
        })
    }

    return (
        
        <div className="noteForm">
            <form action="submitNote"> 
                <div className="formContainer">
                    <span className='saved'>{isSaved && "Saved!"}</span>

                    <div className='inputBox'>
                        <label htmlFor="title">Title</label>
                        <input className='inputTitle'
                        id='title'
                        type="text"
                        name="title"
                        value={noteData.title}
                        placeholder="Your title here"
                        onChange={handleForm}  />
                    </div>
                    

                    <div className='inputBox'>
                        <label htmlFor='priority'>Priority</label>
                        <select className='inputPriority'
                         value={noteData.priority}
                        onChange={handleForm} 
                        name="priority" id="priority">
                            <option disabled={true} selected={true} value=""></option>
                            <option   value="highPriority">Hige Priority</option>
                            <option  value="mediumPriority">Medium Priority</option>
                            <option  value="lowPriority">Low Priority</option>
                        </select>
                    </div>

                    <div className='inputBox'>
                        <label htmlFor="Note">Note</label>
                        <input className='inputNote'
                        id='Note'
                        type="text"
                        name="Note"
                        value={noteData.Note}
                        placeholder="Your content here"
                        onChange={handleForm} 
                        onBlur={updateForm}  />
                    </div>    

                </div>
                    
            </form>
        </div>
    )
};
