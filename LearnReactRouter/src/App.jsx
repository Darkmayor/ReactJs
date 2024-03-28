import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import React from 'react'

function App() {

  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}

export default App
