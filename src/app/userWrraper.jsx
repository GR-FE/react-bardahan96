import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useLocation, useParams } from "react-router"
import { selectUser } from "./redux/usersSlice"

export default function UserWrraper() {

    //get the present url 
    const params = useParams()
    const dispatch= useDispatch()
    const selectedUser = useSelector((state) => state.usersController.selectedUser)
    const notePageurl = useSelector((state) => state.notesStorage.notePageurl)
    const location = useLocation()
    // useEffect(() => {
    //     console.log(" params in user wrraper :",params);
    // }, [params])

    // useEffect(() => {
    //     console.log(location);
    //     console.log("location in the user wrraper :",location);
    // }, [location])

 
    useEffect(() => {
        const user = params.selectedUser
        dispatch(selectUser(user))
    }, [selectUser])

    return (
        <>
        <Outlet/>
        </>
    )
    
};
