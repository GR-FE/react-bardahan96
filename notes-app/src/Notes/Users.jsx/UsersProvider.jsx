import { useEffect, useState } from "react";
import { UsersContext } from "./UsersContext";
import UserModal from "./UserModal";
import { useRef } from "react";

export default function UsersProvider({children}) {
    const [users, setUsers] = useState(() => {
        const savedUsers = localStorage.getItem("Users");
        return savedUsers ? JSON.parse(savedUsers) : []
    })
    

    const [isPop, setIsPop] = useState(false)


    const toggleModal = () => {
        setIsPop(true)
    }

 

    
    const [user, setUser] = useState("")
    const [uploadUser, setUploadUser] = useState("")

const handleUser = (e) => {
    setUser(e.currentTarget.value)
}

// useEffect(() => {
//     setUsers ( prev => [...prev, user])
// }, [])



const createUser = () => {
    // users.forEach(user => {
    //     if( user == user) {
    //         setUser("")
    //         alert("please pick another name")
    //     }     
    // });
    if( user.length > 0) {
        setUsers(prev => [...prev, user]) 

    }
}


const handleUploadUser = (e) => {
    
    setUploadUser(e.currentTarget.id)
    setIsPop(false)
}


useEffect(() => {
    localStorage.setItem("Users" , JSON.stringify(users))
},[users])


    
    return (
        <UsersContext.Provider value={{users , user , handleUser, createUser , uploadUser , handleUploadUser, toggleModal, isPop}}>

        <div>
            
        {children}
         </div>
        </UsersContext.Provider>
    )
    
};
