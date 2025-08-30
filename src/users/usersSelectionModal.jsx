import { useRef } from "react"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { clsoeModal, pushUsers, selectUser } from "../app/redux/usersSlice"
import './usersStyle/usersStyle.css'

export default function UsersSelectionModal() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const usernameInput = useRef();

    const isModal = useSelector((state) => state.usersController.isPop)
    const users = useSelector((state) => state.usersController.users)
    
    const popModal = () => {
        dispatch(clsoeModal())
        navigate("/")
    }

    const pushUser = () => {
       const username = usernameInput.current.value
        dispatch(pushUsers(username))
        usernameInput.current.value = ""
    }

    const selectingUser = (e) => {
        const id = e.currentTarget.id;        
        dispatch(selectUser(id));
        dispatch(clsoeModal());               
        navigate(`/${id}`);                
      };
      
    if (!isModal) return null

    return (
        <>
        <dialog className="usersModal">
                <div className='switchUserHeadeTop'>
                   
                    <h3>Switch User</h3>
                </div>    
                <div className='usersCotnainer'>
                    {[...users].map((user, index) => {
                        return (
                            <div onClick={selectingUser} id={user} className='userRow' key={index}>      
                                <span>{user}</span>
                                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="#9EA2AE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        )
                    })}
                </div>

                <div className='createUser'>
                    { [...users].length > 0 && <span className='or'>or</span>}
                    <span className='addUser'>Add User</span>
                    <div className='createUserInput'>
                        <input  ref={usernameInput} type="text" placeholder="username please"    />
                        <button onClick={pushUser} >Add</button>
                    </div>
                </div>
            </dialog>
            <div className='modalBackdrop' onClick={popModal}></div>
        </>
    )
    
};
