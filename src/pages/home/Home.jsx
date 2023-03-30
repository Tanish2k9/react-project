import React, { useEffect, useState } from 'react'
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Movielist from '../../component/movielist/Movielist';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        const fetching = async () => {
            setLoading(true)
            const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            const data = await response.json();
            setMovies(data.results);
            // console.log(data.results)
            setLoading(false);
        }
        fetching();
    }, [])

    if(loading){
        return (<h1>loading...</h1>)
    }
    return (
        <div className='home'>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
            >
                {
                    movies.map((movie, idx) => {
                        return(
                        <Link to={`/movie/${movie.id}`} key={idx} >
                            <div className="posterImage">
                                {
                                    movie.backdrop_path?<img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="movieImage" />:<h1>no Image to show</h1>
                                }
                                 {/* <img src={movie.backdrop_path?`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`:null} alt="movieImage" /> */}
                            </div>
                            <div className="posterImage__overlay">
                                <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                                <div className="posterImage__runtime">
                                    {movie ? movie.release_date : ""}
                                    <span className="posterImage__rating">
                                        {movie ? movie.vote_average : ""} Rating 
                                    </span>
                                </div>
                                <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                            </div>
                        </Link>)
                    })
                }
            </Carousel>
            <Movielist/>
        </div>
    )
}

export default Home