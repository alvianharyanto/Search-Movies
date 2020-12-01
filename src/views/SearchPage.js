import React from 'react'
import requests from '../requests'
import Rows from '../components/Rows'
import {useParams} from 'react-router-dom'
import Category from '../components/Category'

function Home() {
    const search = useParams()
    // console.log(search.searchTerm)
    return (
        <main className="main">
            <Rows title="Search Movie" fetchUrl={`${requests.searchMovies}${search.searchTerm}`} average/>
            <Category />
        </main>
    )
}

export default Home
