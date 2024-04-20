import React from 'react'
import Home from './pages/Home';

import {Route,Routes} from 'react-router-dom';
import Courses from './courses/Courses.jsx';
import './index.css';
import Signup from './components/Signup.jsx';
import Contact from './pages/Contact.jsx';

const App = () => {
  return (
    <>
    
    <div className='dark-bg-slate-900 dark:text-white'>
    <Routes>
     <Route path='/' exact element={<Home/>} />
    <Route path='/courses' exact element={<Courses/>} />
    <Route path='/signup' exact element={<Signup/>} />
    <Route path='/contact' exact element={<Contact/>} />
    </Routes>
    </div>

    </>
  )
}

export default App
