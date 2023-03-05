import React from 'react'
import Cards from '../components/Cards'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from "../components/Footer";

function home() {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default home