import { useState,createContext,useEffect } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({children}) => {
    const apiKey = import.meta.env.VITE_APIKEY;

    const [searchItem,setSearchItem] = useState("")
    const [searched,setSearched] = useState(false)
    const [title,setTitle] = useState({})
    const [trending,setTrending] = useState([])
    const [showPopUp, setShowPopup] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
      
      async function  defaultMovies() {
        try {
          const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=batman`);
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
        const res = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchItem}`)
        const data = await res.json();
        if(data.Response === "True"){
          setTitle(data);
          setLoading(false);
          setSearched(true);
        
        } else {
          console.error(data.Error)
          setSearched(false);
          setLoading(false);
          setShowPopup(true);
        }
        setSearchItem("");
      
        
    } catch (error) {
        console.log(error)
    }
      
    }


return(
  <MovieContext.Provider value={
    {searchItem, setSearchItem, searched, title, trending, showPopUp, setShowPopup, loading, handleClick}
  }>
    {children}
  </MovieContext.Provider>
);
};
