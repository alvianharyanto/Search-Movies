import React, { useState, useEffect } from 'react';
import axios from '../axios'
import requests from '../requests'
import './banner.css'
import GetRating from './GetRating'
import { faStar, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Banner() {

    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function getMovie() {
            try {
                let response = await axios.get(requests.trendingMovies)
                setMovie(
                    response.data.results[
                        Math.floor(Math.random() * response.data.results.length - 1)
                ])
                return response
            } catch (e) {
                console.log(e.message)
            }
        }
        getMovie();
    }, []);

    // release_date
    // vote_average
    // overview

    //base url for poster
    const baseUrlPoster = "https://image.tmdb.org/t/p/original"

    return (
        <div className="banner"
            style={{
                backgroundImage: `linear-gradient(0deg,
                                    rgba(2,0,36,1) 0%,
                                    rgba(157,11,11,0.2) 50%,
                                    rgba(235,130,66,0.15) 100%),
                                    url("${baseUrlPoster}${movie?.backdrop_path}")`
            }}
        >
            <div className="container">
                <h2 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h2>

                <div className="banner__detail">
                    <span>{movie?.release_date}</span>
                    <div className="rating-wrapper">
                        <FontAwesomeIcon className="icon" icon={ faStar } />
                        <GetRating rating={movie?.vote_average} banner/></div>
                    <p className="overview">{movie?.overview}</p>
                </div>
                    <button className="banner__button">
                        <FontAwesomeIcon className="icon" icon={ faPlay } />
                        Watch Trailer
                    </button>
                </div>
        </div>
    );
}

export default Banner;