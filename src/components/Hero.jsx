import React from 'react'
import SearchBar from './SearchBar'
import Cards from './Cards'

function Hero() {
  return (
    <main className='border-blue-500 w-full h-screen flex flex-col items-center py-28'>
      <h1 className='text-4xl font-bold py-3'>Welcome to Movie Mania</h1>
      <p className='text-xl font-semibold'>Your go to place to search movies</p>

      <SearchBar/>

      <Cards/>
    </main>
  )
}

export default Hero
