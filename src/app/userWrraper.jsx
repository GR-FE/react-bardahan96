import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useParams } from "react-router"
import { selectUser } from "./redux/usersSlice"

export default function UserWrraper() {

    //get the present url 
    const params = useParams()
    const dispatch= useDispatch()
    const selectedUser = useSelector((state) => state.usersController.selectedUser)



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
