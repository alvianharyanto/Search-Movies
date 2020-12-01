import React, { useState, useEffect } from 'react';
import axios from '../axios'
import './rows.css'
import GetRating from './GetRating'

function Rows({ title, fetchUrl, average }) {

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
        <>
            {(title) != "" ? <h3>{(title)}</h3> : ""}
            <div className="rows">
                {movies.map((movie, index) => (
                    <div key={index} className="row">
                        <img
                        className={`row__poster ${average && "row__posterLarge"}`}
                        src={
                            average ? `${baseUrlPoster}${movie.poster_path}`
                            : `${baseUrlPoster}${movie.backdrop_path}`
                        }
                        alt={movie.title} />
                        {
                        average ? <GetRating rating={movie.vote_average} />
                        : <span className="row__title">{movie?.title || movie?.name || movie?.original_name}</span>
                        }
                    </div>
                ))}
            </div>
        </>
    );
}

export default Rows;