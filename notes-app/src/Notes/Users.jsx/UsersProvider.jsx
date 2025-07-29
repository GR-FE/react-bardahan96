import { useEffect, useState } from "react";
import { UsersContext } from "./UsersContext";


export default function UsersProvider({children}) {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState()

const handleUser = (e) => {
    setUser(e.target.value)
}

const createUser = () => {
    setUsers(prev => [...prev, user])
    
}

useEffect(() =>{
    console.log(users);
}, [users])
    
    return (
        <UsersContext.Provider value={{users , user}}>

            <div>
            <div>
                <button onClick={createUser}>add user</button>
                <input type="text" placeholder="username please" onChange={handleUser} value={user} />
            </div>
            {children}
            </div>
        </UsersContext.Provider>
    )
    
};
