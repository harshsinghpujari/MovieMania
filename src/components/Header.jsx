import React from 'react'

function Header() {
  return (
    <header className='w-full h-16 fixed top-0 z-50 bg-slate-900'>
      <nav className='text-2xl items-center flex justify-between px-10 py-2 mt-2'>
        <div>
          <p>🎬 Movie Mania</p>
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
