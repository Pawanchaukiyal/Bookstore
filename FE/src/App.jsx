import React from 'react'
import Home from './pages/Home';

import {Navigate, Route,Routes} from 'react-router-dom';
import Courses from './courses/Courses.jsx';
import './index.css';
import Signup from './components/Signup.jsx';
import Contact from './pages/Contact.jsx';
import {Toaster} from "react-hot-toast";
import { useAuth } from './context/AuthProvider.jsx';
const App = () => {
  const[authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (

    <>
    
    <div className='dark-bg-slate-900 dark:text-white'>
    <Routes>
     <Route path='/' exact element={<Home/>} />
    <Route path='/courses' exact element={authUser?<Courses/>:<Navigate to="/signup/"/>} />
    <Route path='/signup' exact element={<Signup/>} />
    <Route path='/contact' exact element={<Contact/>} />
    </Routes>
    <Toaster/>
    </div>

    </>
  )
}

export default App
