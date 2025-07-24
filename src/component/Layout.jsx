import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <div className='fw-5'> <Outlet/></div>
    
    <Footer/>
    </>
  )
}
