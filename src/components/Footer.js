import './footer.css'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <footer className="footer">
            <div className="subscribe">
                <h3>Subscribe</h3>
                <input type="email" placeholder="example@mail.com"></input>
                <button type="submit">Subscribe Now</button>
            </div>
            <div className="info">
                <div className="sitemap">
                    <h3>
                        Site Map
                    </h3>
                    <ul>
                        <li>Home</li>
                        <li>Category</li>
                        <li>Api</li>
                    </ul>
                </div>
                <div className="project">
                    <h3>
                        Other Project
                    </h3>
                    <ul>
                        <li><a href="http://alvianharyanto.com" target="_blank" rel="noreferrer">Portfolio</a></li>
                    </ul>
                </div>
            </div>
            <div className="copy">
                <h3>Movies</h3>
                <a href="https://www.themoviedb.org/about/logos-attribution" target="_blank" rel="noreferrer">tmdb</a>
                <div className="copy__right">&#169; copyright 2020.
                <div>
                    Made with<FontAwesomeIcon className="icon" icon={ faHeart } />&<FontAwesomeIcon className="icon" icon={ faCoffee } />
                    code by <a href="http://alvianharyanto.com" target="_blank" rel="noreferrer">Alvian Haryanto</a></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
