import { useEffect, useRef } from "react";

function Cards({ searched, title, trending }) {
  const scrollRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    if (!scrollRef.current || trending.length === 0) return;

    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!scrollContainer) return;

      // Each card width = 260px approx (w-60 + gap)
      const cardWidth = 260;

      scrollAmount += cardWidth;

      // Reset when reaching end
      if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollAmount = 0;
      }

      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 3000); // change card every 3 sec

    return () => clearInterval(interval);
  }, [trending]);

  return (
    <div className="w-full h-auto flex flex-col">
      {searched ? (
        <div className="flex items-center justify-center">
        <div className="border w-60 h-82 my-10 flex flex-col items-center justify-start rounded-xl">
          <img
            className="border rounded-xl h-51 w-full object-fill"
            src={
              title.Poster !== "N/A"
                ? title.Poster
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={title.Title || "No Title"}
          />
          <h2 className="text-lg font-bold line-clamp-2 mt-2">{title.Title}</h2>
          <p className="text-sm">Year: {title.Year}</p>
          <p className="text-sm">Rated: {title.Type}</p>
        </div>
        </div>
      ) : (
        <>
          <div className="text-2xl flex justify-start">
            <h1 className="mt-2 text-3xl mx-10 font-bold">
              Top Picks For You...👇🏻
            </h1>
          </div>

          <div
            ref={scrollRef}
            className="mt-6 mx-4 flex overflow-x-auto gap-20 px-6 py-4 scrollbar-hide snap-x snap-mandatory"
          >
            {trending?.map((movie, index) => (
              <div
                key={index}
                className="border w-60 h-80 flex-shrink-0 snap-start flex flex-col items-center justify-start rounded-xl"
              >
                <img
                  className="border rounded-xl h-51 w-full object-fill"
                  src={
                    movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/300x450?text=No+Image"
                  }
                  alt={movie.Title || "No Title"}
                />
                <h2 className="text-lg font-bold text-center mt-1 line-clamp-2">{movie.Title}</h2>
                <p className="text-sm text-gray-400">Year: {movie.Year}</p>
                <p className="text-gray-400">Type: {movie.Type}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Cards;
