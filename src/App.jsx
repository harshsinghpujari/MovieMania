import { useEffect, useState } from 'react'
import fightClubPoster from '../src/assets/fightClubPoster.jpg'

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
      console.log(data);
      setTitle(data);
      setSearchItem("")
      setSearched(true);
   } catch (error) {
      console.log(error)
   }
    
  }

  return (
   <div className='w-full min-h-screen flex flex-col justify-center items-center align-middle'>
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

    


    {  searched === true ? 
    (<div className='border w-50 h-60 flex flex-col justify-center align-middle items-center'>
      <img src={fightClubPoster} alt="movie poster" width={100} height={100}/>
      <p>{title.Title}</p>
      <p>rated: {title.Rated}</p>
 
    </div>):(
      trending.map((movies,index)=> (
        <div  key={index}
        className='w-200 min-h-96 flex '
        >
          <div 
       
            className='border w-50 h-60 flex justify-center align-middle items-center'> 

          <p>{movies.Title}</p>
          <p>rated: {movies.Rated}</p>
 
          </div>
        </div>
      ))
    )
  }
   </div>

  
  )

}

export default App
