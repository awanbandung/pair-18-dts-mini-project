import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header'
import Slideshow from '../components/Slideshow'


import ListMoviesReal from "../container/ListMoviesReal";
export default function HomePage() {
  return (
    <div>
        <Header/>
        <Slideshow/>

        <div style={{  alignContent: 'center', alignItems: 'center'}}>
        <ListMoviesReal/>
        
        <Footer/>
        </div>    
    </div>
  )
}
