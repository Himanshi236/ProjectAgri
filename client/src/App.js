import React,{useState,useEffect} from "react";

import Home from './pages/Home'
import Blog from './pages/Blog'
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from "./pages/Contact";


function App() {
  const [message,setMessage]=useState("");

  useEffect(()=>{
    fetch("http://localhost:5000/message")
    .then((res)=>res.json())
    .then((data)=>setMessage(data.message));
  },[]);
  return (
    <>
      {/* <Home /> */}
    {/* <Login /> */}
      {/* <Register /> */}
     {/* <Blog/> */}
     <Contact/>

    </>
    
  
    
  );
}

export default App;
