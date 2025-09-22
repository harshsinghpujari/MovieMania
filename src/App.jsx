import { useEffect, useState } from 'react'
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Layout from './layout/Layout';
import Contact from './pages/Contact';
function App() {
  
  const apiKey = import.meta.env.VITE_APIKEY;

  const [searchItem,setSearchItem] = useState("")
  const [searched,setSearched] = useState(false)
  const [title,setTitle] = useState({})
  const [trending,setTrending] = useState([])
  const [showPopUp, setShowPopUp] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    
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
    setLoading(true);
    try {
      const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${searchItem}`)
      const data = await res.json();
      if(data.Response === "True"){
        setTitle(data);
        setLoading(false);
        setSearched(true);
      
      } else {
        console.error(data.Error)
        setSearched(false);
        setLoading(false);
        setShowPopUp(true);
      }
      setSearchItem("");
    
      
   } catch (error) {
      console.log(error)
   }
    
  }

  return (

    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home 
            searchItem={searchItem}
            setSearchItem={setSearchItem}
            handleClick={handleClick}
            searched={searched}
            title={title}
            trending={trending}
            showPopUp={showPopUp}
            setShowPopUP={setShowPopUp}
            loading={loading}
            />}
        />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
      </Route>
    </Routes>

  )
}

export default App





  
    // <div className='stars flex flex-col w-full min-h-screen bg-black text-white'>
    
    //   <Header/>

    //   <main className='flex-grow'>
    //   <Hero 
    //   searchItem={searchItem}
    //   setSearchItem={setSearchItem}
    //   handleClick={handleClick}
    //   searched={searched}
    //   title={title}
    //   trending={trending}
    //   />
    //   </main>
    //   <Footer/>

    // </div>
 

    
      
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

