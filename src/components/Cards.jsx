import { useContext, useEffect, useRef } from "react";
import { MovieContext } from "../context/MovieContext";

function Cards() 
{

  const {showPopUp,setShowPopup,trending,searched,title} = useContext(MovieContext);

  const scrollRef = useRef(null);
  useEffect(() => {
    if (!scrollRef.current || trending.length === 0) return;

    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!scrollContainer) return;

      // Each card width = 260px approx (w-60 + gap)
      const cardWidth = 260;

      scrollAmount += cardWidth;

      if (
        scrollAmount >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollAmount = 0;
      }

      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 2000); // change card every 2 sec

    return () => clearInterval(interval);
  }, [trending]);


  useEffect(() => {
 
    if (showPopUp) {
     
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 2000);

      // Clean up the timer if the component unmounts or if `showPopUp` changes again
      return () => clearTimeout(timer);
    }
  }, [showPopUp, setShowPopup]);

  return (
    <div className="w-full h-auto flex flex-col">
  
      {showPopUp && (
        <div className="w-full bg-red-500 text-white text-center p-2 text-2xl">
          Error finding the movie
        </div>
      )}

      {!showPopUp && (searched ? (
        <div className="flex items-center justify-center">
          <div className="w-80 h-64 gap-4 md:w-150 md:h-82  flex  items-center md:gap-16 rounded-xl  overflow-hidden bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg ">
            <div className="w-50 ml-2 md:ml-4 md:w-96">
              <img
                className="border rounded-xl w-full h-40 md:h-48 object-fill"
                src={
                  title.Poster !== "N/A"
                    ? title.Poster
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={title.Title || "No Title"}
              />
            </div>
            <div className="md:mr-2">
              <h2 className="text-xl font-bold md:text-3xl md:font-bold line-clamp-2 mt-2 text-yellow-300">
                {title.Title}
              </h2>
              <p className="text-lg font-bold md:text-xl md:font-semibold text-black">
                Year: {title.Year}
              </p>
              <p className="text-lg font-bold md:text-xl md:font-semibold text-black">
                Rated: {title.Rated}
              </p>
              <p className="text-lg font-bold md:font-semibold text-black">
                Genre: {title.Genre}
              </p>
              <span className="text-lg font-bold md:text-xl md:font-semibold text-black ">
                Synopsis:{" "}
              </span>
              <span className="md:hidden md:text-md md:font-medium md:mr-4 text-white ">
                {" "}
                {title.Plot && title.Plot.length > 10
                  ? title.Plot.substring(0, 10) + "..."
                  : title.Plot}
              </span>

              <span className="hidden md:block md:text-md md:font-medium md:mr-4 text-white ">
                {" "}
                {title.Plot && title.Plot.length > 100
                  ? title.Plot.substring(0, 100) + "..."
                  : title.Plot}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="text-2xl flex justify-start">
            <h1 className="text-xl mx-auto md:mt-2  md:text-3xl md:ml-14 font-bold text-white shadow-white">
              Top Picks For You...👇🏻
            </h1>
          </div>

          <div
            ref={scrollRef}
            className="mt-4 px-4 sm:px-8 md:px-12 lg:px-20 flex overflow-x-auto   sm:gap-10 gap-10 md:gap-30 py-4 scrollbar-hide snap-x snap-mandatory"
          >
            {trending?.map((movie, index) => (
              <div
                key={index}
                className="w-40 h-56 md:w-60 md:h-72 flex-shrink-0 snap-center flex flex-col items-center justify-start rounded-xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mt-2"
              >
                <img
                  className="border rounded-xl h-30 md:h-46 w-full object-fill"
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/300x450?text=No+Image"
                  }
                  alt={movie.Title || "No Title"}
                />
                <h2 className="text-sm md:text-lg font-semibold md:font-bold text-center mt-1 line-clamp-2">
                  {movie.Title}
                </h2>
                <p className="mt-1 md:text-sm text-gray-200 font-semibold">
                  Year: {movie.Year}
                </p>
                <p className="text-gray-200">Type: {movie.Type}</p>
              </div>
            ))}
          </div>
        </>)
      )}
    </div>
  );
}

export default Cards;