import React from 'react'

function Header() {
  return (
    <header className='w-full h-14 fixed top-0 z-50 '>
      <nav className='text-2xl items-center border flex justify-between px-10 py-2'>
        <div>
          <p>logo</p>
          <img src="" alt="" />
        </div>

        <div className='flex gap-5'>
          <p>About</p>
          <p>Home</p>
          <p>footer</p>
          <p>explore</p>
        </div>
      </nav>
    </header>
  )
}

export default Header
