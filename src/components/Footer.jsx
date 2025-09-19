import { NavLink } from 'react-router'
import { FaTwitter,FaInstagram, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className=" w-full h-40 md:38  bg-gray-900 text-gray-300 ">
      <div className="flex flex-col md:flex-row">
        
        {/* Brand */}
        
          <div className="w-full flex flex-col justify-center items-center mt-2 md:items-start md:ml-10">
            <h2 className='text-xl font-bold '>🎬Movie Mania</h2>
            <p className="text-md font-bold ml-2 text-gray-400">Your movie discovery app</p>
          </div>
        

        <div className='flex gap-24 items-center '>

          {/* Links */}
          {/* <div className=" hidden md:flex  gap-10 ">
            <NavLink to="/" className="hover:text-white">Home</NavLink>
            <NavLink to="/About" className="hover:text-white">About</NavLink>
            <NavLink to="/Contact" className="hover:text-white">Contact</NavLink>
          </div> */}

          {/* Socials */}
          <div className="w-full flex justify-center mt-4  md:gap-4 md:items-end mr-10 md:mt-10 mb-5 ">
            <p className='hidden'>Socials:</p>
              <div className='flex gap-10 text-white mt-2 ml-2'>
                <a href="#"><FaTwitter size={20}/> <p className='hidden md:block'>X</p></a>
                <a href="#"><FaInstagram size={20}/><p className='hidden md:block'>Insta</p></a>
                <a href="#"><FaGithub size={20}/><p className='hidden md:block'>Github</p></a>
              </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className=" hidden md:flex justify-center text-center text-sm text-gray-500 mt-2">
        © 2025 MovieHub. Author - Himanshu Singh.
      </div>

      <div className=" flex justify-center text-center text-sm text-gray-500 mt-6 md:hidden">
        © Author - Himanshu Singh.
      </div>
      
    </footer>

  )
}

export default Footer
