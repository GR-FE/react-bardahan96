import { useMemo } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux"
import { getClickedId } from "../app/redux/notesSlice";
import './SideBarStyle/NotesList.css'

export default function NotesList() {

    //import notes storage state
    const notesStorageData = useSelector((state) => state.notesStorage.notesStorageData);

    const dispatch= useDispatch()
    const navigate = useNavigate()

    const noteId = (e) => {
        const id = e.currentTarget.id;
        if (!selectedUser) return;                         
        dispatch(getClickedId(id));
        navigate(`/${selectedUser}/${id}`);             
      };

    const selectedUser = useSelector((state) => state.usersController.selectedUser)

    //define the arrays 
        const lowPriority = useMemo(() => {
            return notesStorageData.filter((note) => note.priority == "lowPriority")
        }, [notesStorageData])
    
        const mediumPriority = useMemo(() => {
            return notesStorageData.filter((note) => note.priority == "mediumPriority")
        }, [notesStorageData])
        
        const highPriority = useMemo(() => {
           return notesStorageData.filter((note) => note.priority == "highPriority")
        }, [notesStorageData])

    return (
        <>
        <div>
         <div>
            {[...highPriority].length > 0 && <h2>High priority</h2>}
            {[...highPriority].map((note) => {
                return (
                 
                 <div onClick={noteId} id={note.id} key={note.id}>
                   
                        <div key={note.id} className="noteTitle">
                            <span>{note.title}</span>
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="#9EA2AE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div> 
                       
                 </div>
                 
                )
            })} 
        </div>

        <div>
            {[...mediumPriority].length > 0 && <h2>medium priority</h2>}
            {[...mediumPriority].map((note) => {
                return (
                 
                 <div onClick={noteId} id={note.id} key={note.id}>
                    
                        <div key={note.id} className="noteTitle">
                            <span>{note.title}</span>
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="#9EA2AE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div> 
                   
                 </div>
                 
                )
            })} 
        </div>

        <div>
            {[...lowPriority].length > 0 && <h2>Low priority</h2>}
            {[...lowPriority].map((note) => {
                return (
                 
                 <div onClick={noteId} id={note.id} key={note.id}>
                   
                        <div key={note.id} className="noteTitle">
                            <span>{note.title}</span>
                            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L1 13" stroke="#9EA2AE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div> 
                      
                 </div>
                 
                )
            })} 
        </div>
        </div>
        </>
    )
    
};
