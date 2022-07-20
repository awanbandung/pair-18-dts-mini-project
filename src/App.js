import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Homepage } from './Pages/Homepage';
import { Register } from './Pages/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { ThemeProvider } from 'react-bootstrap';
import Login from './Pages/Login'
import { LoggedInComponent } from './Component/LoggedInComponent';
import { MovieDetail } from './Pages/MovieDetail';

const App = () => {
  return (
    <>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route
            path="/detail/:MovieID"
            element={
              <LoggedInComponent>
                <MovieDetail />
              </LoggedInComponent>
            }
          />
        </Routes>
      </ThemeProvider >

    </>
  )
}

export default App

