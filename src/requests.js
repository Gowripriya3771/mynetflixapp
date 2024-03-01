export const API_KEY = "ea00cd74a7314b5887a7766f73202632";
// these r just endpoints
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchMovieDetails: `/movie/id?api_key=${API_KEY}&language=en-US`,
  fetchMovieCredits: `/movie/id/credits?api_key=${API_KEY}&language=en-US`,
  fetchMovieRecommendations: `/movie/id/recommendations?api_key=${API_KEY}&language=en-US`,
  fetchSearchResults: `/search/movie?query=Explanation&api_key=${API_KEY}&language=en-US'`,
};
const fetch = Object.values(requests);
// console.log(Object.values(requests))
console.log(fetch[0]);
export default requests;


