import React from 'react'
import Hero from '../components/Hero'


function Home({searchItem,setSearchItem,handleClick,searched,title,trending}) {
  return (
    
      <div className='w-full'>
        <Hero 
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        handleClick={handleClick}
        searched={searched}
        title={title}
        trending={trending}
        />
      </div>
     
  )
}

export default Home
