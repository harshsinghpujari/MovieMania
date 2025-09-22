import React from 'react'
import SearchBar from './SearchBar'
import Cards from './Cards'
import bgImage from "../assets/background-7.jpg"

function Hero({searchItem, setSearchItem, handleClick, searched,title,trending,showPopUp,setShowPopUP,loading}) {
  return (
    <div>
      <div className='w-full h-full flex flex-col items-center py-28 bg-cover bg-center bg-fixed filter brightness-75'
      style={{backgroundImage: `url(${bgImage})`}}
      >
      <h1 className='text-xl md:text-4xl font-extrabold py-2 text-yellow-300'>Welcome to Movie Mania</h1>
      <p className='md:text-2xl text-sm font-bold text-center'>Your go to place to search movies</p>

      <SearchBar
      searchItem={searchItem}
      setSearchItem={setSearchItem}
      handleClick={handleClick}
      loading={loading}
      />

      <Cards
      searched={searched}
      title={title}
      trending={trending}
      showPopUp={showPopUp}
      setShowPopup={setShowPopUP}
      />
      </div>
    </div>
  )
}

export default Hero
