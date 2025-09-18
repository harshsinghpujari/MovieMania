
function About() {
  return (
    
    <section className=" px-8 py-12 text-center">
        <h1 className="text-4xl text-amber-300 font-bold mb-6 mt-20">
          About Movie Mania
        </h1>

        <p className="text-xl font-semibold max-w-2xl mx-auto text-gray-300 leading-relaxed">
          Movie Mania is a simple React-based web app that allows you to search for movies, 
          explore trending picks, and view details like title, release year, and type. 
          It uses the OMDB API as its movie database source. 🎬
        </p>

        <p className="text-xl font-semibold max-w-2xl mx-auto text-gray-300 leading-relaxed mt-10">
          This project was built to practice React, API integration, and responsive design.
          It’s part of my journey into full-stack development. 🚀
        </p>

        <p className="mt-6 text-gray-400">
          Data Source: <a href="https://www.omdbapi.com/" className="text-blue-400 underline">OMDB API</a>
        </p>
    </section>
  )
}

export default About
