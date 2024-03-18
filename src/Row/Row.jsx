import { useEffect, useState } from "react";
import "./Row.css";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
// export const UserContext = createContext();

export const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow, search, setSearch, pageNumber }) {
  function handleClick(id) {
    navigate(`/details/${id}`);
  }

  const navigate = useNavigate();
  //code snippets which run on some conditions
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl.replace("pageN", pageNumber));
      console.log(request.data.results);
      setMovies(request.data.results);
      return request.data.results;
    }

    fetchData();
  }, [fetchUrl, pageNumber]);

  return (
    // <UserContext.Provider value={movies}>
    <div className="row">
      <h1>{title}</h1>
      <div className="row-posters">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            //isLarge is for netflix originals which is needed to be displayed in  portrait.
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            onError="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
            alt={movie.name}
            onClick={() => handleClick(`${movie.id}`)}
          ></img>
        ))}
      </div>
    </div>
    // </UserContext.Provider>
  );
}

export default Row;
// MAY BE SEARCH LOGIC
// filteredArray=movies.filter((movie)=>movie.original_title===search){
// return filteredArray
// }
