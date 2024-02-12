### App.js

App.js sets up the structure of the React application, handling routing through the react-router-dom library. It imports various components, including the main Header, Home, MovieList, and Movie components, and defines how they should be rendered based on the URL paths. The App component acts as the entry point for the application, rendering the overall structure and layout.

### Header.js

Header.js defines a React component (Header) responsible for rendering the header section of your application. It includes a logo and navigation links created using the Link component from react-router-dom. The component is styled using an associated CSS file, and it is exported for use in other parts of the application.

### Home.js

Home.js defines a React component (Home) responsible for rendering the home page of your movie application. It fetches popular movies from the TMDB API, displays them in a carousel using the react-responsive-carousel library, and provides links to view more details about each movie. The component is styled using an associated CSS file, and it also renders the MovieList component below the carousel.

### Card.js

Card.js is a React component that provides a movie card with dynamic content fetched from the movie prop. It includes a loading skeleton for a better user experience during data fetching. The component is styled using an associated CSS file (card.css).

### MovieList.js

MovieList.js is a React component that fetches and displays a list of movies based on a specified category or type. It uses the Card component to render individual movie cards and dynamically updates the displayed movies when the category changes. The component is styled using an associated CSS file (movieList.css).

### Movie.js

Movie.js is a React component responsible for displaying detailed information about a specific movie. It fetches data from the TMDB API based on the movie ID provided in the URL, and it presents the information in a structured layout. The component is styled using an associated CSS file (movie.css).