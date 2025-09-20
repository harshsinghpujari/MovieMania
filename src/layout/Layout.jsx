import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import bgImage from "../assets/background-7.jpg"
import '../App.css';
function Layout() {
  return (
    <div className='stars flex flex-col min-h-screen bg-black text-white'
    style={{backgroundImage: `url(${bgImage})`}}
    >
      <Header/>
      <main className='flex-grow'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
