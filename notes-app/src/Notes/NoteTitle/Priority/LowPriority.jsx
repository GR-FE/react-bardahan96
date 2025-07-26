import { BrowserRouter, NavLink } from "react-router";


export default function LowPriority({noteName, lowPriority}) {
    

    return (
        <div>
               {[...lowPriority].length > 0 && <h2>Low priority</h2>}
               {[...lowPriority].map((note, index) => {
                   return (
                        
                    <div>
                                <NavLink noteName={noteName} id={note.title} to="NoteContent" key={index}>
                            <div className="noteTitle">
                                  <span>{note.title}</span>
                                  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M1 1L7 7L1 13" stroke="#9EA2AE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                  </svg>
                              </div> 
                              </NavLink>     
                    </div>
                   )
               })} 
        </div>
    )
};
