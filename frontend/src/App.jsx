import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Swiper from "./components/Swiper.jsx"
import CourseList from './components/Cards.jsx'
function App() {

  return (
    <>
      <Navbar />
      <br/><br/><br/>
      <Swiper/>
      <br/>
      <CourseList/>
      <Footer/>
    </>
  )
}

export default App
