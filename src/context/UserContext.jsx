import { createContext } from "react"
import * as userStorage from '../util/storage/user.js';
import { useState, useEffect } from "react";

export const UserContext= createContext();

export function UserProvider({children}){
    const [user, setUser]= useState(null);
    const [loading, setLoading]= useState(true);

    useEffect(()=>{
        const storedUser=userStorage.getUser();
        setUser(storedUser);
        setLoading(false);
    },[]);

    function editUser(updatedData){
        const updatedUser={...user, ...updatedData};
        userStorage.saveUser(updatedUser);
        setUser(updatedUser);
    }

    function clearUser(){
        setUser(null);
        userStorage.clearUser();
    }


    return(
        <UserContext.Provider value={{user, editUser, clearUser, loading}}>
            {children}
        </UserContext.Provider>
    );
}