import { useEffect } from "react"
import { NavLink, useLocation } from "react-router"


export default function TopBar() {

    const location = useLocation()

    const arrowLocation = location.pathname == "/"
        const showArrow = (!arrowLocation) &&  <NavLink to="">
            
                 <button className="prevBtn"><svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M13.5 7H1M1 7L7 1M1 7L7 13" stroke="#4E61F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
         </svg></button>
         </NavLink>

    return (
        <div className="noteHeader">

            
            
            <h1>My Note App</h1>
            {showArrow}
            
        </div>
    )
    
};


