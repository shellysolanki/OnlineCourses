import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Swiper from "./components/Swiper.jsx"
import CourseList from './components/Cards.jsx'
import Admin from "./components/Admin.jsx";
import User from "./components/User.jsx";

import Login from "./pages/Login.jsx";
import Courses from "./pages/Courses.jsx";
import Lessons from "./pages/Lessons.jsx";
import AboutPage from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import CourseAdminList from "./pages/DisplayCourseAdmin.jsx";

function App() {

  return (
    <Router>
      
      <Routes>
        <Route path="/" element={
         <>
          <Navbar /><br/><br/><br/>
          <Swiper/><br/>
          <CourseList/>
          <Footer/>
         </>
        }/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path='/lessons' element={<Lessons/>}/>
        <Route path='/courselist' element={<CourseList/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/course-list" element={<CourseAdminList/>}/>
      </Routes>

    </Router>
  )
}

export default App
