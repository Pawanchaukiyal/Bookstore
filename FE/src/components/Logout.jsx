import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast, { Toaster } from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser] =useAuth();
    const handleLogout = () =>{
    try {
        setAuthUser({
            ...authUser,
            user:null 
        })
            localStorage.removeItem("Users");
            toast.success("Logout Success");
            // document.getElementById("my_modal_5").close();
            setTimeout(() =>{
              window.location.reload();
            },3000)
        }
        catch (error) {
        toast.error("Error at Logout:"+error.message);
        setTimeout(() =>{
            },2000)
    }
    }    

  return (
    <div>
      <button className='px-3 py-1 bg-red text-white rounded-md cursor-pointer'
      onClick={handleLogout}
      >Logout</button>
    </div>
  )
}

export default Logout
