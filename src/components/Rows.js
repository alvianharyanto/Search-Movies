import './rows.css'
import axios from '../axios'
import GetRating from './GetRating'
import React, { useState, useEffect } from 'react';

function Rows({ title, fetchUrl, average }) {
    // start get api
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
    }, [fetchUrl]); // wait fetchUrl from other component

    //base url for poster
    const baseUrlPoster = "https://image.tmdb.org/t/p/original"

    return (
        <>
            {(title) !== "" ? <h3>{(title)}</h3> : ""}
            <div className="rows">
                {/* loop  */}
                {movies.map((movie, index) => (
                    <div key={index} className="row">
                        <img
                        className={`row__poster ${average && "row__posterLarge"}`}
                        // if average get movie poster, else get backdrop
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