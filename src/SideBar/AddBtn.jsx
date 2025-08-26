import { NavLink } from "react-router";
import '../SideBar/SideBarStyle/addBtn.css'
import '../MOBILE/mobile.css'
import { selectUser } from "../app/redux/usersSlice";
import { useSelector } from "react-redux";

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
