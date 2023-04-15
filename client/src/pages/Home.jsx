import React from 'react'
import Cards from '../components/Cards'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from "../components/Footer";
import AboutUs from '../components/AboutUs';


function home() {

  return (
    <div>
        <Navbar/>
        <Slider/>
        <AboutUs/>
        
        <Cards/>
        <Footer/>
    </div>
  )
  
}

export default home