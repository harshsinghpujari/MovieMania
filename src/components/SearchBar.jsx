import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function SearchBar({searchItem, setSearchItem, handleClick,loading}) {
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

      className='w-50 h-4 p-3 text-lg md:w-72 md:h-5 md:text-2xl flex grow md:p-4 border-none outline-none ' 
      type="text" placeholder='search movies'/>
      <button
      onClick={ () => handleClick(searchItem)}
      className='text-xl md:text-2xl p-2 items-center bg-amber-300 rounded-r-xl'
      >🔍</button>
      </div>

      <p className=' text-l text-yellow-300 font-semibold my-5 text-center'>
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

    {loading?(<div
    className='w-12 h-12 md:w-20 md:h-20  border-4 border-b-amber-200 border-t-amber-200 animate-spin rounded-full font-bold'
    ></div>) : (null)}
    </div>


  )
}

export default SearchBar
