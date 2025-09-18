import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='flex flex-col min-h-screen bg-black text-white'>
      <Header/>
      <main className='flex-grow'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
