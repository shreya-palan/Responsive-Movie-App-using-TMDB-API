import { useEffect, useState } from 'react';
import './card.css';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Card = ({movie}) => { /*Card is a functional component that takes a movie prop as its parameter*/

    /*This state variable tracks whether the movie data is still loading*/
    const [isLoading, setIsLoading] = useState(true)

    /* used to simulate a delay of 1.5 seconds before setting isLoading to false*/
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)

},[])
return <>
{
    isLoading
    ?
    /*If isLoading is true, a loading skeleton is displayed 
    using the Skeleton and SkeletonTheme components */
    <div className="cards">
        <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
        </SkeletonTheme>
    </div>
    :
    /*If isLoading is false, the actual movie card content is displayed
      It includes an image, title, release date, rating, and an overview of the movie
      The data is fetched dynamically from the movie prop.*/
    <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="cards__overlay">
                    <div className="card__title">{movie?movie.original_title:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
        /*The movie card is wrapped in a Link component that navigates to the movie detail page when clicked.*/
}
</>
}

export default Card
