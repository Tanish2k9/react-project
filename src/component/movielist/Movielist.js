import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from '../card/Card';
import "./movielist.css"
const Movielist = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([])
    const { type } = useParams();
    useEffect(() => {
        setLoading(true);
        const fetching = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            const data = await response.json()
            setMovies(data.results)
            console.log(data.results)
        }
        fetching()
        setLoading(false)
    }, [type])
    if (loading) {
        return <h1>loading</h1>
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movies.map((movie,idx) => {
                       return <Card key={idx} movie={movie} />
                    })
                }
            </div>
        </div>
    )
}

export default Movielist