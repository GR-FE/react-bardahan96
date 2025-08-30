import {  useEffect, useContext } from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { UiContext } from "./UiContext/UiContext"
import { fetchUsers } from "./redux/usersSlice"
import { fetchNotes } from './redux/notesSlice'
import SideBar from "../SideBar/sideBar"
import Note from "../mainNote/Note"
import UserSwitch from "../users/UserSwitch"
import UserWrraper from "./userWrraper"
import MobileWrraper from "../MOBILE/mobileWrraper"
import AddSwitchUser from "../MOBILE/addSwitchUser"
import './styleApp/notesApp.css'

export default function NotesApp() {

    const selectedUser = useSelector((state) => state.usersController.selectedUser)
    const { isMobile } = useContext(UiContext)

    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(fetchNotes(selectedUser))
    }, [selectedUser ])

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

  if (!isMobile) {
    return (
        <div className="notesContainer">
            <BrowserRouter>
                <UserSwitch/>
                <div className="sideBar">
                    <SideBar/>
                </div>
                <div className="mainNote">
                    <div className="mainNoteInner">

                    <Routes>
                        <Route path="/:selectedUser" element={<UserWrraper/>} >
                            <Route path="Note" element={<Note />}/>
                            <Route path=":noteId" element={<Note />} />    
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

            <div className="mainNoteMobile">
                <Routes>
                        <Route path="" element={<MobileWrraper/>}>
                        <Route index element={<AddSwitchUser/>}/>
                        <Route path="/:selectedUser" element={<UserWrraper/>}>
                            <Route path="" element={ <SideBar />}/>
                            <Route path="Note" element={<Note />}/>
                            <Route path=":noteId" element={<Note/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
  }
    
};
