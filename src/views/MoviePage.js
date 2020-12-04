import './moviePage.css'
import axios from '../axios'
import { useParams } from 'react-router-dom';
import GetRating from '../components/GetRating'
import GetRunTime from '../components/GetRunTime'
import { React, useEffect, useState }from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

function MoviePage() {

    const id = useParams()

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function getMovie() {
            try {
                let response = await axios.get(`/movie/${id.id}?api_key=c8997ff7c612d482cc2c06636ac812df`)
                setMovie(response.data)
            } catch (e) {
                console.log(e.message)
            }
            return getMovie
        }
        getMovie()
    }, [id.id]); // wait movie id

    //base url for poster
    const baseUrlPoster = "https://image.tmdb.org/t/p/original"

    function release () {
        if (movie.release_date !== undefined) {
            return movie.release_date.substring(0, 4) // get string 0-4
        }
    }

    return (
        <main className="main">
            <div className="movie">
                <div
                // background image from api
                className="movie__banner"
                style={{
                    backgroundImage: `linear-gradient(0deg,
                                        var(--bg) 0%,
                                        rgba(157,11,11,0.2) 50%,
                                        rgba(235,130,66,0.15) 100%),
                                        url("${baseUrlPoster}${movie?.backdrop_path || movie?.poster_path}")`
                }}>
                </div>
                <div className="container">
                    <div className="movie__detail">
                        <div className="wrapper">
                            <div className="movie__detail--release">{release()}</div>
                            <div className="movie__detail--rating">
                                <GetRating rating={movie.vote_average} />
                            </div>
                        </div>
                        <h2 className="movie__detail--title">{movie?.title || movie?.name || movie?.original_name}</h2>
                        <div className="movie__runtime">
                            <GetRunTime runtime={movie.runtime} />
                        </div>
                        <div className="movie__category">
                            {movie.genres?.map((genre, index) => (
                            <span className="movie__category--genre" key={index} >{genre.name}</span>
                            ))}
                        </div>
                        <p className="movie__detail--overview">{movie?.overview}</p>
                        <button className="movie__detail--trailer">
                            <FontAwesomeIcon className="icon" icon={ faPlay } />
                            Watch Trailer
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MoviePage
