import './rows.css'
import axios from '../axios'
import GetRating from './GetRating'
import {Link} from 'react-router-dom'
import React, { useState, useEffect } from 'react';

function Rows({ title, fetchUrl, average }) {
    // start get api
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getMovies() {
            setLoading(true)
            try {
                let response = await axios.get(fetchUrl)
                setMovies(response.data.results)
                setLoading(false)
            } catch (e) {
                console.log(e.message)
                setLoading(true)
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
            { loading ? <div>loading... </div> :
                <div className="rows">
                    {/* loop  */}
                    {movies.map((movie, index) => (
                        <Link key={index} to={`/movie/${movie.id}/${movie?.title || movie?.name || movie?.original_name}`}>
                            <div className="row">
                                <img
                                    className={`row__poster ${average && "row__posterLarge"}`}
                                    // if average get movie poster, else get backdrop
                                    src={
                                        average ? `${baseUrlPoster}${movie.poster_path}`
                                        : `${baseUrlPoster}${movie.backdrop_path}`
                                    }
                                    alt={movie.title}
                                />
                                {/* if average get rating*/}
                                {average ? <GetRating rating={movie.vote_average} />
                                // else get title or name or original_name
                                : <span className="row__title">{movie?.title || movie?.name || movie?.original_name}</span>}
                            </div>
                        </Link>
                    ))}
                </div>
            }
        </>
    );
}

export default Rows;