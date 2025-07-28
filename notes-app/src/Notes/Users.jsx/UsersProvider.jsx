import { useState } from "react";
import { UsersContext } from "./UsersContext";

export default function UsersProvider({children}) {
    const [users, setUsers] = useState([])


    
    return (
        <UsersContext.Provider>
            {children}
        </UsersContext.Provider>
    )
    
};
