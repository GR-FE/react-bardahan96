import { useState } from "react";
import { UsersContext } from "./UsersContext";
import { useContext } from "react";
import { useEffect } from "react";


export default function UsersProvider({children}) {
    const [user, setUser] = useState()
    
    const [users, setUsers] = useState()

console.log(users);

    // console.log("this is the share storage in users context   :   " , sharedNotesStorage);

    const handleUser = (e) => {
        setUser(e.target.value)
    }

    const createUsers = () => {
        setUsers( user)
    }

 


    // useEffect(() => {

    //         localStorage.setItem(`${users} Notes`, JSON.stringify([]));
        
    // }, [users]);
    

    return (
        <UsersContext.Provider value={{users}}>
            <div>
                <div>
                    <button onClick={createUsers} >add user</button>
                    <input type="text" placeholder="your username please" onChange={handleUser}  value={user} />
                    <div>User name</div>
                    </div>
            {children}
            </div>
        </UsersContext.Provider>
    )
    
};
