import { useState, useEffect } from "react";
import { createContext } from "react";

export const UiContext = createContext({isMobile: false});

export default function UiProvider({children}) {
    const [isMobile, setIsMobile] = useState(() => {
        const width = window.innerWidth;
        if( width < 431) {
            return true
        }
    })

    return (
        <UiContext.Provider value={{isMobile}}>
            {children}
        </UiContext.Provider>
    )
    
};
