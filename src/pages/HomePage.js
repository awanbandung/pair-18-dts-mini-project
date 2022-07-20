import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header'


import ListMoviesReal from "../container/ListMoviesReal";
export default function HomePage() {
  return (
    <div>
        <Header/>


        <div style={{  alignContent: 'center', alignItems: 'center'}}>
        <ListMoviesReal/>
        
        <Footer/>
        </div>    
    </div>
  )
}
