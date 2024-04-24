import react, { createContext, useState } from 'react';
import { useContext } from 'react';

export const AuthContext =createContext()

export default function AuthProvider({children}){
// take user from the local storage
const intialAuthUser=localStorage.getItem("Users");
// manage the state--is user login or logout
const[authUser,setAuthUser]=useState(
    intialAuthUser ? JSON.parse(intialAuthUser) : undefined
);
return(
    <AuthContext.Provider value = {[authUser,setAuthUser]}>
    {children}
    </AuthContext.Provider>
)
}

export const useAuth = () => useContext(AuthContext);


// here childern components are banner navbar,et