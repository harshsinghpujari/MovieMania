Movie Mania: A Modern Movie Discovery App 🎬

Movie Mania is a sleek, responsive React application that allows users to instantly search for movies and discover trending picks. Built with a focus on modern React features like Hooks and the Context API, it provides a seamless user experience for finding movie details and handles search errors gracefully.

✨ Check out the [Live Demo](https://moviemaniago.netlify.app/)! ✨

📸 Sneak Peek

![CineSearch Application Screenshot](./src//assets/appScreenshot/Screenshot%202025-09-25%20162426.png)

![CineSearch Application Screenshot](./src//assets/appScreenshot/Screenshot%202025-09-25%20162450.png)

![CineSearch Application Screenshot](./src//assets/appScreenshot/Screenshot%202025-09-25%20162524.png)

A quick look at the main search interface and the trending carousel.

## 🚀 Features

    Real-time Movie Search: Instantly find movies using the OMDb API.

    Dynamic UI: The interface intelligently switches between a detailed search result and a default trending movie view.

    Auto-scrolling Carousel: A "Top Picks" carousel automatically scrolls through trending movies for discovery.

    Efficient State Management: Implemented React's Context API to completely eliminate prop drilling, making the state logic clean and scalable.

    User-Friendly Error Handling: A self-hiding notification gracefully informs the user if a movie isn't found, without disrupting the UI.

    Responsive Design: A beautiful and functional experience on all devices, from mobile phones to desktops.

## 🛠️ Technologies & Tools Used

This project was built using a modern frontend stack:

    Core Framework: React.js

    State Management: React Context API (with useContext) and React Hooks (useState, useEffect, useRef).

    Styling: Tailwind CSS for rapid, utility-first styling,material Ui, Swiper.js, framer motion.

    Data Fetching: Asynchronous fetching with the fetch API.

    API: OMDb (Open Movie Database) API for movie data.

    Deployment: Netlify (for hosting) & GitHub (for version control).

## 🧠 Key Concepts & Learnings

This project was an excellent opportunity to practice and solidify several key React concepts:

1. Advanced Hook Implementation

The project relies heavily on React Hooks to manage component logic and side effects:

    useEffect was crucial for creating side effects like the auto-scrolling timer for the carousel and the 3-second timer for the error pop-up. The cleanup functions in useEffect ensure no memory leaks occur.

    useRef was used to get a direct reference to the scrolling container's DOM node, allowing for programmatic and smooth scrolling animations.

2. Global State with Context API

Prop drilling was a key problem solved in this project.

    Instead of passing state and functions down through multiple layers of components, the Context API was used to create a global state provider.

    This allowed components at any level of the tree to access necessary data (like the searched movie, trending list, and error state) directly, leading to much cleaner, more maintainable, and decoupled components.

3. Sophisticated Conditional Rendering

The entire user interface is driven by state. The logic was structured hierarchically to decide what to render:

    First Priority: Check if the error pop-up should be displayed.

    Second Priority: If no error, check if a movie has been successfully searched.

    Default: If neither of the above, render the trending carousel.

## ⚙️ Local Setup and Installation

To run this project on your local machine, follow these simple steps:

1. Clone the repository:
Bash

git clone https://github.com/harshsinghpujari/MovieMania.git

2. Navigate to the project directory:
Bash

cd [MovieMania]

3. Install dependencies:
Bash

npm install

4. Set up environment variables:
You need an API key from OMDb to fetch movie data.

    Visit http://www.omdbapi.com/apikey.aspx to get your free API key.

    Create a file named .env in the root of your project.

    Add your API key to the .env file like this:

REACT_APP_OMDB_API_KEY=your_api_key_here

5. Start the development server:
Bash

npm start

The application should now be running on http://localhost:3000.

## 🙌 Acknowledgements

    This project fetches data from the OMDb API. A big thanks to them for their fantastic service.

## ✍🏻 Author
    Himanshu Singh