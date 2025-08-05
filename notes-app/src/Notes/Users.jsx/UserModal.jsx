import { useContext, useEffect } from 'react'
import { UsersContext } from './UsersContext'
import './Users.css'


export default function UserModal() {

    const {user, users , handleUser, createUser , uploadUser, handleUploadUser , setIsPop} = useContext(UsersContext)
    
useEffect(() => {
    console.log("upload user: ", uploadUser);
}, [uploadUser])

    return (
            <>            
            
            <dialog className="usersModal">
                <div className='switchUserHeadeTop'>
                    <button onClick={() => setIsPop(false)}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13" height="13" viewBox="0 0 50 50">
                    <path d="M 11.5 11 C 11.372 11 11.243984 11.048984 11.146484 11.146484 C 11.049484 11.244484 11 11.372 11 11.5 C 11 11.628 11.048484 11.755516 11.146484 11.853516 L 24.292969 25 L 11.146484 38.146484 C 10.951484 38.341484 10.951484 38.658516 11.146484 38.853516 C 11.244484 38.950516 11.372 39 11.5 39 C 11.628 39 11.755516 38.951516 11.853516 38.853516 L 25 25.707031 L 38.146484 38.853516 C 38.341484 39.048516 38.658516 39.048516 38.853516 38.853516 C 39.048516 38.657516 39.049516 38.342484 38.853516 38.146484 L 25.707031 25 L 38.853516 11.853516 C 39.048516 11.658516 39.048516 11.341484 38.853516 11.146484 C 38.657516 10.951484 38.342484 10.950484 38.146484 11.146484 L 25 24.292969 L 11.853516 11.146484 C 11.756016 11.048984 11.628 11 11.5 11 z"></path>
                    </svg>
                    </button>
                    <h3>Switch User</h3>
                </div>    
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
            <div className='modalBackdrop'></div>
            </>
    )
    
};
