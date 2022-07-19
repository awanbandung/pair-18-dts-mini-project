import React from 'react'
import { Footer } from '../Component/Footer'
import { Header } from '../Component/Header'
import { BackgroundSlideshow } from '../Component/BackgroundSlideshow'
import { PopularMovies } from '../Container/PopularMovies'

export const Homepage = () => {
    return (
        <>
            <Header />
            <div style={{ height: '100vh', alignContent: 'center' }}>
                <BackgroundSlideshow />
                <PopularMovies />
                <Footer />
            </div>
        </>
    )
}
