import { NavLink } from 'react-router'
import { FaTwitter,FaInstagram, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className=" w-full h-38  bg-gray-900 text-gray-300 ">
      <div className="flex justify-around gap-20 ">
        
        {/* Brand */}
        <div className='w-1/5 mt-6 mr-60 text-center items-center'>
          <div className="text-3xl font-bold">
            🎬 Movie Mania
            <p className="text-lg text-gray-400">Your movie discovery app</p>
          </div>
        </div>

        <div className='flex gap-24 items-center '>

          {/* Links */}
          <div className="flex  gap-10 ">
            <NavLink to="/" className="hover:text-white">Home</NavLink>
            <NavLink to="/About" className="hover:text-white">About</NavLink>
            <NavLink to="/Contact" className="hover:text-white">Contact</NavLink>
          </div>

          {/* Socials */}
          <div className="mt-12 gap-4">
            <p>Socials:</p>
              <div className='flex gap-8 text-white mt-2'>
                <a href="#"><FaTwitter size={20}/> X</a>
                <a href="#"><FaInstagram size={20}/> Insta</a>
                <a href="#"><FaGithub size={20}/> Github</a>
              </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className=" flex justify-center text-center text-sm text-gray-500 mt-2">
        © 2025 MovieHub. Author - Himanshu Singh.
      </div>
    </footer>

  )
}

export default Footer
