import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) =>{
    const userInfo = {
      email: data.email,
      password: data.password,
    }
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Login Successfully");
          document.getElementById("my_modal_5").close();
          setTimeout(() =>{

            window.location.reload();
          },1000)

          // navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() =>{
          },2000)
        }
      });
  }
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <form   onSubmit={handleSubmit(onSubmit)} method="dialog" >
      {/* if there is a button in form, it will close the modal */}
      <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_5").close()}
            >
              ✕
            </Link>
    
    <h3 className="font-bold text-lg text-center">Login</h3>
  
    <div className='text-center'>

     <div className='mt-7 sp-y-2'>
        <span className='mr-8 pl-3'>Email</span>
        <input type="email" placeholder='Enter you email' name="email" className="w-80 px-3 py-1 border rounded-md outline-none"
        {...register("email", { required: true })} />   
        <br />
        {errors.email && <span className='font-semibold text-red-500'>This field is required</span>}
     </div>
     <div className='mt-5 spay-2'>
        <span className='mr-4'>Password</span>
        <input type="password" placeholder='Enter you Password' name="password" className="w-80 px-3 py-1 border rounded-md outline-none"
        {...register("password", { required: true })} />   
        <br />
        {errors.password && <span className='font-semibold text-red-500'>This field is required</span>}
     </div>
    
    {/* div for login button and  */}
       <div className='flex justify-around mt-8'>
        
       
         <button className="btn btn-outline btn-success w-28 h-12 hover:bg-green-500  ">
            <span className='text-lg'>Login</span></button>
        
         
            <h3 className='mt-3 cursor-pointer'>Not Registered</h3>
            <Link to="/signup" className='text-right mt-3 hover:underline cursor-pointer hover:text-blue-400'>signUp</Link>
       
            </div>
     </div>
     </form>
  </div>
</dialog>
    </div>
  )
}

// 

export default Login
