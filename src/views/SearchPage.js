import React from 'react'
import requests from '../requests'
import Rows from '../components/Rows'
import Category from '../components/Category'

function Home(search) {
    return (
        <>
            <main className="main">
                {/* <Rows title="Search Movie" fetchUrl={`${requests.searchMovies}${search}`} average/> */}
                <Category />
            </main>
        </>
    )
}

export default Home
