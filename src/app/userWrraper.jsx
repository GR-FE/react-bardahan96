import { useEffect } from "react"
import { Outlet, useParams } from "react-router"
import { useDispatch } from "react-redux"
import { selectUser } from "./redux/usersSlice"

export default function UserWrraper() {

    //get the present url 
    const params = useParams()
    const dispatch= useDispatch()

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
