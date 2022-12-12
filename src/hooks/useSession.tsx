// Local storage management for authentication

import { useState } from 'react';

const useSession = () => {
  
    const getSession = ():string | null => {
        try {
            const session = window.localStorage.getItem("authToken")
            if(session !== null) return session
        } catch (error) {
            console.error(error)
        }
        
        return null    
    }

    const [token, setToken] = useState<string | null>(()=> getSession())

    const handleSetSession = (token: string) =>{        
        try {
            if(token !== null) window.localStorage.setItem("authToken", `${token}`);
        } catch (error) {
            console.error(error);
        } 
        setToken(getSession())
    } 

    const handleRemoveSession = () =>{  
          
        try {
            window.localStorage.setItem("authToken", "");
        } catch (error) {
            console.error(error);
        } 
        // setToken(getSession())
    } 



    return { token, handleSetSession, handleRemoveSession }
}

export default useSession