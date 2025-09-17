import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function SearchBar({searchItem, setSearchItem, handleClick}) {
  return (
    <div className='my-10 flex flex-col items-center'>
      <div className=' border-white text-white border-4 rounded-2xl flex items-center bg-white/20 backdrop-blur-md '>
        <input 
        value={searchItem}
        onChange={(e) => {setSearchItem(e.target.value)}}
        onKeyDown={(e) => {
          if(e.key === "Enter")
          {
            handleClick(searchItem);
          }
        }}

      className='w-72 h-5 text-2xl flex grow p-4 border-none outline-none ' 
      type="text" placeholder='search movies'/>
      <button
      onClick={ () => handleClick(searchItem)}
      className='text-2xl p-2 items-center bg-amber-300 rounded-r-xl'
      >🔍</button>
      </div>

      <p className=' text-xl text-yellow-300 font-semibold my-5 '>
        <Typewriter
          words={['Search Your movies🎬...','Discover Trending shows🎞️...','Binge watch your favourite shows🍿...']}
          loop={true}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </p>
    </div>


  )
}

export default SearchBar
