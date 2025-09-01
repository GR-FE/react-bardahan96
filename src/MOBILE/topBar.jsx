import {  useLocation, useNavigate , useParams} from "react-router"
import {  useSelector } from "react-redux"
import '../MOBILE/mobile.css'
import { use, useEffect } from "react"

export default function TopBar() {

    const getUrl = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        console.log("params ",getUrl);
    })

    const notesStorageData = useSelector((state) => state.notesStorage.notesStorageData);
    const selectedUser = useSelector((state) => state.usersController.selectedUser);

    useEffect(()=> {
        console.log(selectedUser);
    })
    
    const handleGoBack = () => {
        navigate(location.pathname.substring(0, location.pathname.lastIndexOf('/')))
    }
    
    const noteTitle = [...notesStorageData].find((note) => note.id == getUrl.noteId )
  
    const prevArrow =  <button onClick={handleGoBack} className="prevBtn"><svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 7H1M1 7L7 1M1 7L7 13" stroke="#4E61F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </button>

    return (
        <>
        <div>
            <div className="noteHeader">
                {!getUrl.selectedUser && <h1>My notes app</h1>}
                {(!getUrl.noteId && getUrl.selectedUser) && <h1>{selectedUser}</h1>}
                {(getUrl.noteId && getUrl.selectedUser) && <h1>{noteTitle.title}</h1>}
                {getUrl.selectedUser && prevArrow}
                <div>
                
                </div>
            </div>
            
        </div>
        </>   
    ) 
};