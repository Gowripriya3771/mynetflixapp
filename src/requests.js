export const API_KEY = "ea00cd74a7314b5887a7766f73202632";
// these r just endpoints
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=en-US&page=20`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=en-US`,
  fetchMovieDetails: `/movie/id?api_key=${API_KEY}&language=en-US`,
  fetchMovieCredits: `/movie/id/credits?api_key=${API_KEY}&language=en-US`,
  fetchMovieRecommendations: `/movie/id/recommendations?api_key=${API_KEY}&language=en-US`,
  fetchSearchResults: `/search/movie?query=searchh&api_key=${API_KEY}&language=en-US'`,
  fetchVideoTrailer: `/movie/movie_id/videos?api_key=${API_KEY}&language=en-US`,
  // movie_id is replaced by dynamically received id of the movie that is clicked.
};
const fetch = Object.values(requests);
// console.log(Object.values(requests))
console.log(fetch[0]);
export default requests;


