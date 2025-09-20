import { NavLink } from 'react-router'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'


function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className=' w-full h-16 fixed top-0 z-50 bg-purple-950 shadow-sm'>
      <nav className='flex justify-between text-xl md:text-2xl items-center py-2 mt-2'>
        <div>
          <p>🎬 Movie Mania</p>
        </div>

        <div className='mr-4 md:hidden'>
          <button
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <div className=' hidden md:flex gap-8 mr-4'>
          <NavLink to="/" className={({isActive}) => 
            isActive? "text-yellow-300" : null
          }>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => 
            isActive? "text-yellow-300" : null
          }>About</NavLink>

          <NavLink to="/contact" className={({isActive}) => 
            isActive? "text-yellow-300" : null
          }>Contact</NavLink>
        </div>
        
      </nav>

      {isMenuOpen && (
        <div className='md:hidden absolute top-16 right-0 w-48 bg-slate-900 flex flex-col items-center gap-4 py-4 transition-transform duration-300 ease-in-out'>
          <NavLink to="/" onClick={toggleMenu} className='hover:text-yellow-300'>Home</NavLink>
          <NavLink to="/about" onClick={toggleMenu} className='hover:text-yellow-300'>About</NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className='hover:text-yellow-300'>Contact</NavLink>
        </div>
      )}

    </header>
  )
}

export default Header
