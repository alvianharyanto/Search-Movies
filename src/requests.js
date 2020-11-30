const API_KEY = "c8997ff7c612d482cc2c06636ac812df";

const requests = {
    trendingMovies: `/trending/movie/week?api_key=${API_KEY}`,
    upcomingMovies: `/movie/upcoming?api_key=${API_KEY}`,
    actionMovies: `/discover/movie?api_key=${API_KEY}&page=1&with_genres=28`,
    comedyMovies: `/discover/movie?api_key=${API_KEY}&page=1&with_genres=35`,
    dramaMovies: `/discover/movie?api_key=${API_KEY}&page=1&with_genres=18`,
    documentaryMovies: `/discover/movie?api_key=${API_KEY}&page=1&with_genres=99`,
    fantasyMovies: `/discover/movie?api_key=${API_KEY}&page=1&with_genres=14`,
    horrorMovies: `/discover/movie?api_key=${API_KEY}&page=1&with_genres=27`,
    mysteryMovies: `/discover/movie?api_key=${API_KEY}&page=1&with_genres=9648`,
    romanceMovies: `/discover/movie?api_key=${API_KEY}&page=1&with_genres=10749`,
    thrillerMovies: `/discover/movie?api_key=${API_KEY}&page=1&with_genres=53`,

    searchMovies: `/search/movie?api_key=${API_KEY}&query=`

}

export default requests;

