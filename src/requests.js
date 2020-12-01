const API_KEY = "c8997ff7c612d482cc2c06636ac812df"; // api key

const requests = {
    // get api base on trending and upcoming
    trendingMovies: `/trending/movie/week?api_key=${API_KEY}`,
    upcomingMovies: `/movie/upcoming?api_key=${API_KEY}`,

    // get api  base on category
    category: `/discover/movie?api_key=${API_KEY}&page=1&with_genres=`,

    // get api base on search
    searchMovies: `/search/movie?api_key=${API_KEY}&query=`
}

export default requests;

