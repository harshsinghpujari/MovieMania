import { NavLink } from 'react-router'

function Header() {
  return (
    <header className='w-full h-16 fixed top-0 z-50 bg-slate-900'>
      <nav className='text-2xl items-center flex justify-between px-10 py-2 mt-2'>
        <div>
          <p>🎬 Movie Mania</p>
          <img src="" alt="" />
        </div>

        <div className='flex gap-8'>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        
      </nav>
    </header>
  )
}

export default Header
