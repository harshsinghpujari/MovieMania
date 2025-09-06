import React from 'react'
import image from '../assets/fightClubPoster.jpg'

function Cards() {
  return (
  <div className='w-full h-auto flex flex-col'>
    <div className='text-2xl flex justify-start '>
      <h1 className=' mt-2 text-3xl mx-10 font-bold'>Top Picks For You...👇🏻</h1>
    </div>

    <div className=' mt-6  flex justify-around'>
      <div className='border w-60 h-80 my-10 flex flex-col items-center justify-start rounded-xl object-cover '>
        <img 
        className=' border rounded-xl h-51 w-full object-fill'
        src={image} alt=""  />
        <h2 className='text-2xl'>Title Here</h2>
        <p className='text-xl'>stars: </p>
        <p className='text-xl'>Rated:</p>

      </div>
      <div className='border w-60 h-80 my-10 flex flex-col items-center justify-start rounded-xl object-cover '>
        <img 
        className=' border rounded-xl h-51 w-full object-fill'
        src={image} alt=""  />
        <h2 className='text-2xl'>Title Here</h2>
        <p className='text-xl'>stars: </p>
        <p className='text-xl'>Rated:</p>

      </div>
      <div className='border w-60 h-80 my-10 flex flex-col items-center justify-start rounded-xl object-cover '>
        <img 
        className=' border rounded-xl h-51 w-full object-fill'
        src={image} alt=""  />
        <h2 className='text-2xl'>Title Here</h2>
        <p className='text-xl'>stars: </p>
        <p className='text-xl'>Rated:</p>

      </div>
      <div className='border w-60 h-80 my-10 flex flex-col items-center justify-start rounded-xl object-cover '>
        <img 
        className=' border rounded-xl h-51 w-full object-fill'
        src={image} alt=""  />
        <h2 className='text-2xl'>Title Here</h2>
        <p className='text-xl'>stars: </p>
        <p className='text-xl'>Rated:</p>

      </div>
    </div>
  </div>
  )
}

export default Cards
