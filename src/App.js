import React from 'react';
import Rows from './components/Rows'
import Banner from './components/Banner'
import requests from './requests'


function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1 className="header__title">Movies</h1>
        </header>
        <Banner />
        <main className="main">
          <Rows title="Trending Now" fetchUrl={requests.trendingMovies} average/>
          <Rows title="Upcoming Movies" fetchUrl={requests.upcomingMovies} />
          <Rows title="Action Movies" fetchUrl={requests.actionMovies} />

        </main>
      </div>
    </div>
  );
}

export default App;
