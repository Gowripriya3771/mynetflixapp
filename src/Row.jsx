import { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";

export const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  //code snippets which run on some conditions
  // const filteredMovies = movies.filter((movie) => movie.includes(search));

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);

      return request.data.results;
    }
    fetchData();
  }, [fetchUrl]);

  //here if we give an empty dependency array then run once when the row loads ,when we give movies inside the dependency array then it loads whenever the array changes
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            key={movie.id}
            //isLarge is for netflix originals which is needed to be displayed in a portrait.
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
