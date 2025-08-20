// import { useEffect, useState } from "react";
// import { UsersContext } from "./UsersContext";

// export default function UsersProvider({children}) {
//     const [users, setUsers] = useState(() => {
//         const savedUsers = localStorage.getItem("Users");
//         return savedUsers ? JSON.parse(savedUsers) : []
//     })
    
//     const [isPop, setIsPop] = useState(false)

//     const toggleModal = () => {
//         setIsPop(true)
//     }
// /
//     const [user, setUser] = useState("")
//     const [uploadUser, setUploadUser] = useState("")

//     const handleUser = (e) => {
//         setUser(e.currentTarget.value)
//     }

//     const createUser = () => {
//         if( user.length > 0) {
//             setUsers(prev => [...prev, user]) 
//         }
//     }

//     const handleUploadUser = (e) => {
//         setUploadUser(e.currentTarget.id)
//         setIsPop(false)
//     }

//     useEffect(() => {
//         localStorage.setItem("Users" , JSON.stringify(users))
//     },[users])

//     return (
//         <UsersContext.Provider value={{users , user , handleUser, createUser , uploadUser , handleUploadUser, toggleModal, isPop, setIsPop}}>
//         <div>   
//             {children}
//         </div>
//         </UsersContext.Provider>
//     )  
// };
