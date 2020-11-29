import React from 'react';
import Rows from './components/Rows'
import requests from './requests'


function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>Movies</h1>
        </header>
        <main className="main">
          <Rows title="Trending Movies" fetchUrl={requests.trendingMovies} />
          <Rows title="Upcoming Movies" fetchUrl={requests.trendingSeries} noAverage />
        </main>
      </div>
    </div>
  );
}

export default App;
