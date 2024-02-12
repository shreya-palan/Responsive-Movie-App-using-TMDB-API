import React, { useEffect, useState } from 'react';
import './home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../components/movieList/MovieList';


const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=5b14b8b79dfbd9f5d0d3e54895f9173b&language=en-US") /* fetch popular movies from a Movie Database (TMDB) API*/
        .then(res => res.json()) /*then method used to covert the response to JSON format*/
        .then(data => setPopularMovies(data.results)) /*Extract the response from res and set it as the new state using setPopularMovies func*/
    }, [])

  return (
    <>
      <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => ( /*maps through the popularMovies array and creates Carousel slides for each movie*/
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} > {/*creates a clickable link to the movie detail page*/}
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} /> {/*displays the movie backdrop image fetched from the TMDB API*/}
                                </div>
                                {/*display the original title, release date, rating, and overview of the movie.*/}
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />
            </div>
    </>
  )
}

export default Home
