import UserContext from "./contexts/UserContext";
import { useState } from "react";

export default function ContextManager({children}){
    let [user,setUser] = useState(null);
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}