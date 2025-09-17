import React from 'react'
import SearchBar from './SearchBar'
import Cards from './Cards'
import bgImage from "../assets/background-6.jpg"

function Hero({searchItem, setSearchItem, handleClick, searched,title,trending}) {
  return (
    <section>
      <div className='w-full h-full flex flex-col items-center py-28 bg-cover bg-center bg-fixed filter brightness-75'
      style={{backgroundImage: `url(${bgImage})`}}>
      <h1 className='text-4xl font-extrabold py-3 text-yellow-300'>Welcome to Movie Mania</h1>
      <p className='text-2xl font-bold'>Your go to place to search movies</p>

      <SearchBar
      searchItem={searchItem}
      setSearchItem={setSearchItem}
      handleClick={handleClick}
      />

      <Cards
      searched={searched}
      title={title}
      trending={trending}
      />
      </div>
    </section>
  )
}

export default Hero
