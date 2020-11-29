import React, { useState, useEffect } from 'react';
import axios from '../axios'
import './rows.css'
import GetRating from './GetRating'

function Rows({ title, fetchUrl, noAverage }) {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function getMovies() {
            try {
                let response = await axios.get(fetchUrl)
                setMovies(response.data.results)
            } catch (e) {
                console.log(e.message)
            }
            return getMovies;
        }
        getMovies();
    }, [fetchUrl]);

    //base url for poster
    const baseUrlPoster = "https://image.tmdb.org/t/p/original"

    return (
        <div className="rows-wrapper">
            <h3>{(title)}</h3>
            <div className="rows">
                {movies.map((movie, index) => (
                    <div key={index} className="row">
                        <img src={`${baseUrlPoster}${movie.poster_path}`} alt={movie.name} />
                        <span>{noAverage ? "" : movie.vote_average}</span>
                        <GetRating rating={movie.vote_average} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Rows;