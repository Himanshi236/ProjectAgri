import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import FlipCard from "../components/FlipCard"




function Blog() {
  let API = "https://hn.algolia.com/api/v1/search_by_date?query=IndianFarmers";
  const fetchAPI=async(url)=>{
    try{
      const res=await fetch(url);
      const data=await res.json();
      console.log(data)

    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchAPI(API)
  })
  return (
    <div>
      <Navbar />
      <FlipCard />
    </div>
  );
}

export default Blog