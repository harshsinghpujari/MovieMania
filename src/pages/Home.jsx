import React from 'react'
import Hero from '../components/Hero'


function Home({searchItem,setSearchItem,handleClick,searched,title,trending,showPopUp,setShowPopUP,loading}) {
  return (
    
      <div className='w-full'>
        
        <Hero 
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        handleClick={handleClick}
        searched={searched}
        title={title}
        trending={trending}
        showPopUp={showPopUp}
        setShowPopUP={setShowPopUP}
        loading={loading}
        />
       
      </div>
     
  )
}

export default Home
