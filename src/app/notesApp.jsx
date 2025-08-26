import { useState ,useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import SideBar from "../SideBar/sideBar"
import './styleApp/notesApp.css'
import Note from "../mainNote/Note"
import { fetchNotes } from './redux/notesSlice'
import { useDispatch, useSelector } from "react-redux"
import TopBar from "../MOBILE/topBar"
import UserSwitch from "../users/UserSwitch"
import UsersSelectionModal from "../users/usersSelectionModal"
import { fetchUsers } from "./redux/usersSlice"
import UserWrraper from "./userWrraper"


export default function NotesApp() {

    

    const selectedUser = useSelector((state) => state.usersController.selectedUser)
    const noteData = useSelector((state) => state.notesStorage.noteData)
    const isPop = useSelector((state) => state.usersController.isPop)
    const [isMobile, setIsMobile] = useState(false)
      const [isSaved,setIsSaved] = useState(false)

    function defineTypeOfView () {
        const width = window.innerWidth
        if(width < 431) {
            setIsMobile(true)
        }
    }

    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(fetchNotes(selectedUser))
    }, [selectedUser])


    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    useEffect(() => {
        defineTypeOfView()
    }, [])

  if (!isMobile) {
    return (
        <div className="notesContainer">
            <BrowserRouter>
            <UserSwitch/>
            {isPop &&<UsersSelectionModal/>}
            <div className="sideBar">
                <SideBar/>
            </div>
            

            <div className="mainNote">
                <div className="mainNoteInner">
                
                <Routes>
                    <Route path="/:selectedUser" element={<UserWrraper/>} >
                        <Route path="Note" element={<Note isSaved={isSaved} setIsSaved={setIsSaved}/>}/>
                        <Route path="Note/:noteId" element={<Note isSaved={isSaved} setIsSaved={setIsSaved}/>} />
                         {/* <Route path="/UsersSelection" element={<UsersSelectionModal/>}/> */}
                    </Route>
                </Routes>
                </div>
            </div>
            
            </BrowserRouter>
        </div>
    )
  }

  if (isMobile) {
    return (
        <BrowserRouter>
            <TopBar/>
            <div className="underLine"></div>   
            <Routes>
                <Route path="" element={ <SideBar isMobile={isMobile} />}/>
                <Route path="Note" element={<Note />}/>
                <Route path="Note/:noteId" element={<Note/>}/>
                {/* <Route path={`/NoteContent/:noteId`} element={<NoteContent clickedId={clickedId}/>}/>   */}
            </Routes>
        </BrowserRouter>
    )
  }
    
};
