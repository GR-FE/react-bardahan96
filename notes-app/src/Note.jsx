import { useEffect, useState } from 'react';
import './Note.css'
import { useNavigate } from 'react-router';
import { forwardRef , useImperativeHandle } from 'react';
import { useLocation } from 'react-router';

export default function Note({updateNote}) {

    const [isSaved, setIsSaved] = useState(false)
    const [noteData, setNoteData] = useState([])




    
    
    const handleForm = (e) => {
        setNoteData({
            ...noteData, [e.target.name]: e.target.value
        }) 
    }


    const updateForm = () => {     
        setIsSaved(true)
        updateNote(noteData)
        clearInput()
    }



    useEffect(() => {
        setInterval(() => {
            setIsSaved(false)
        }, 2000);
    }, [isSaved])

        const clearInput = () => {
        setNoteData({
        title: "" , 
        Note: ""
        })
    }

    return (
        
        <div className="noteForm">
            <form action="submitNote"> 
                <div className="formContainer">
                    <span className='saved'>{isSaved && "saved!"}</span>
                    <label htmlFor="title">Title</label>
                    <input id='title' type="text"  name="title" value={noteData.title}    placeholder="Your title here" onChange={handleForm}  />

                    <label htmlFor="Note">Note</label>
                    <input id='Note' type="text" name="Note" value={noteData.Note}   placeholder="Your content here" onBlur={updateForm}  onChange={handleForm}   />
                </div>
                    
            </form>
        </div>
    )
};
