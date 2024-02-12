import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './movieList.css';
import Card from '../card/Card';

const MovieList = () => {

    const [movieList, setMovieList] = useState([]) /*This state will store an array of movies*/
    const {type} = useParams() /*extract the type parameter from the URL which represents the type of movies to be displayed*/

    /* runs when the component mounts fetching data for the default category*/
    useEffect(() => {
        getData()
    }, [])

    /*runs whenever the type parameter in the URL changes
       useful for fetching new data when the user navigates to a different category*/
    useEffect(() => {
        getData()
    }, [type])

    /*The getData function is responsible for fetching movie data from the TMDB API based on the specified type
      If type is not provided it defaults to fetching popular movies*/
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=5b14b8b79dfbd9f5d0d3e54895f9173b&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
}

return (
    <div className="movie__list">
        {/*displays the category or type of movies being shown (uppercase)*/}
        <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
        <div className="list__cards">
            {
                /*div maps over the movieList array and renders individual movie cards using the Card component
                  Each card is passed the corresponding movie data using the movie prop*/
                movieList.map(movie => (
                    <Card movie={movie} />
                ))
            }
        </div>
    </div>
)
}

export default MovieList
