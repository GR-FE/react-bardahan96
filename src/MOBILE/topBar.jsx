
import { NavLink, Outlet, useLocation, useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router";
import '../MOBILE/mobile.css'
import { useEffect } from "react";
import { selectUser } from "../app/redux/usersSlice";

export default function TopBar() {

    const notesStorageData = useSelector((state) => state.notesStorage.notesStorageData);
    const selectedUser = useSelector((state) => state.usersController.selectedUser)
    const   params = useParams()
    const getUrl = params
    
    
    const location = useLocation()
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(location.pathname.substring(0, location.pathname.lastIndexOf('/')))
    }
    
    const noteTitle = [...notesStorageData].find((note) => note.id == getUrl )


        
        const prevArrow =  <button onClick={handleGoBack} className="prevBtn"><svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 7H1M1 7L7 1M1 7L7 13" stroke="#4E61F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
    
    return (
        <div>
            <div className="noteHeader">
                {noteTitle ? <h1>{noteTitle.title}</h1> : <h1>My notes app</h1>}
                {prevArrow}
                <div>
                
                </div>

            </div>
            <Outlet/>
        </div>
        
        
    )
};


