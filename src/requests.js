const API_KEY = "c8997ff7c612d482cc2c06636ac812df";

const requests = {
    trendingMovies: `/trending/movie/week?api_key=${API_KEY}`,
    upcomingMovies: `/movie/upcoming?api_key=${API_KEY}`,

    category: `/discover/movie?api_key=${API_KEY}&page=1&with_genres=`,

    searchMovies: `/search/movie?api_key=${API_KEY}&query=`

}

export default requests;

