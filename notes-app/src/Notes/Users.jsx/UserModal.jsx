import { useContext, useEffect } from 'react'
import { UsersContext } from './UsersContext'
import './Users.css'


export default function UserModal({isPop}) {

    const {user, users , handleUser, createUser , uploadUser, handleUploadUser} = useContext(UsersContext)
    
useEffect(() => {
    console.log("upload user: ", uploadUser);
}, [uploadUser])

    return (
            <>            
            <dialog className="usersModal">
                <h3>Switch User</h3>
                <div className='usersCotnainer'>
                    {[...users].map((user, index) => {
                        return (
                            <div onClick={handleUploadUser} id={user} className='userRow' key={index}>      
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
                        <input type="text" placeholder="username please" onChange={handleUser} value={user} />
                        <button onClick={createUser}>Add</button>
                    </div>
                </div>
            </dialog>
            </>
    )
    
};
