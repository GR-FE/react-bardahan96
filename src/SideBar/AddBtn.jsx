import { NavLink } from "react-router";
import { useSelector } from "react-redux";
import '../SideBar/SideBarStyle/addBtn.css'
import '../MOBILE/mobile.css'

export default function AddBtn() {

    const selectedUser = useSelector((state) => state.usersController.selectedUser)

    return (
        <>
            <div className="addNoteContainer">
                <NavLink className="addNote"  to={`/${selectedUser}/Note`}><button className="AddNoteBtn">+ Add note</button></NavLink>
            </div>
        </>
    ) 
};