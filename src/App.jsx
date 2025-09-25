  import './App.css';
  import {Routes,Route} from 'react-router-dom';
  import Home from './pages/Home';
  import About from './pages/About'
  import Layout from './layout/Layout';
  import Contact from './pages/Contact';
  import { MovieProvider } from './context/MovieContext';

  function App() {
    
  
    return (
    <MovieProvider>
        <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
        </Route>
      </Routes>
    </MovieProvider>
      

    )
  }

  export default App;






    
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

