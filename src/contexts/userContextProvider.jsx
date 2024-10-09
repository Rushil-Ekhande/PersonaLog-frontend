import { useState } from "react"
import userContext from "./userContext.js"

const UserContextProvider = ({children}) => {
    const [client, setClient] = useState(null);
    return (
        <userContext.Provider value={{client, setClient}}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider;