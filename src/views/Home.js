import React from 'react'
import requests from '../requests'
import Rows from '../components/Rows'
import Banner from '../components/Banner'
import Category from '../components/Category'

function Home() {
    return (
        <main className="main">
            <Banner />
            <div className="main__content">
                <Rows title="Trending Now" fetchUrl={requests.trendingMovies} average/> {/* get tranding */}
                <Rows title="Upcoming Movies" fetchUrl={requests.upcomingMovies} /> {/* get upcoming */}
                <Category />
            </div>
        </main>
    )
}

export default Home
