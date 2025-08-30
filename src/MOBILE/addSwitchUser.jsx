import { useSelector, useDispatch } from "react-redux"
import { openModal } from "../app/redux/usersSlice"
import UsersSelectionModal from "../users/usersSelectionModal"
import './mobile.css'

export default function AddSwitchUser() {

    const dispatch = useDispatch()
    const isPop = useSelector((state) => state.usersController.isPop)

const popModal = () => {
    dispatch(openModal())
}

return (
    <>
        <div className="addUserContainer">
            <button onClick={popModal}  className="addUserBtn">+ Add User</button>
        </div>
        {isPop && <UsersSelectionModal/>}
    </>
)};
