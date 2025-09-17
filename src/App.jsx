import { useEffect, useState } from 'react'
import fightClubPoster from '../src/assets/fightClubPoster.jpg'
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Footer from './components/Footer';
import backgroundImage from './assets/cinema-with-popcorn-box.jpg'
function App() {
  
  const apiKey = import.meta.env.VITE_APIKEY;

  const [searchItem,setSearchItem] = useState("")
  const [searched,setSearched] = useState(false)
  const [title,setTitle] = useState({})
  const [trending,setTrending] = useState([])


  useEffect(() => {
    console.log("heeloo")
    async function  defaultMovies() {
      try {
        const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=batman`);
        const defData = await res.json();
        console.log(defData.Search);
        setTrending(defData.Search || []);
      } catch (error) {
        console.log(error)
      }

    }

    defaultMovies();

  },[])

  const handleClick = async (searchItem) => {
    try {
      const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchItem}`)
      const data = await res.json();
      if(data.Response === "True"){
        setTitle(data);
        setSearched(true);
      } else {
        console.error("Movie not found: ",data.Error)
        setSearched(false);
      }
      setSearchItem("");
    
      
   } catch (error) {
      console.log(error)
   }
    
  }

  return (

  <div className='stars flex flex-col w-full min-h-screen bg-black text-white'>
    
      <Header/>

      <main className='flex-grow'>
      <Hero 
      searchItem={searchItem}
      setSearchItem={setSearchItem}
      handleClick={handleClick}
      searched={searched}
      title={title}
      trending={trending}
      />
      </main>
      <Footer/>

  </div>

    
      
   /*{ <div className='w-full min-h-screen flex flex-col  justify-center items-center align-middle text-black'>
     <div>
      <h1>Welcome To Movie Mania..</h1>
      <p>Your go to places to find movies..</p>
    </div>

    <div className='m-7'>
      <input
      value={searchItem}
      onChange={(e) => {
        setSearchItem(e.target.value)
      }}
      className='border'
      type="text" placeholder="Search movies" />
      <button 
      onClick={() => handleClick(searchItem)
    
      }
      className='border'>🔍</button>
    </div>

    
  <div className='border-blue-50'>

    {  searched === true ? 
    (<div className='border w-50 h-60 flex flex-col justify-center align-middle items-center'>
      <img src={title.Poster} alt="movie poster" width={100} height={100}/>
      <p>{title.Title}</p>
      <p>rated: {title.Rated}</p>
 
    </div>):(
      trending.map((movies,index)=> (
        <div  key={index}
        className='w-200 min-h-96 flex border '
        >
          <div 
       
            className='border w-50 h-60 flex justify-center align-middle items-center'> 

          <img src={movies.Poster} alt="" />

          <p>{movies.Title}</p>
          <p>rated: {movies.Rated}</p>
 
          </div>
        </div>
      ))
    )
  }
   </div>

  </div>
   }*/

  )

}

export default App
