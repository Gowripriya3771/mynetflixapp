import { useEffect, useState } from "react";
import "./Row.css";
import { useNavigate } from "react-router-dom";
import axios from "./axios";
import MovieDetails from "./MovieDetails";

export const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  function handleClick(id) {
    navigate(`/details/:${id}`);
  }

  const navigate = useNavigate();
  //code snippets which run on some conditions
  const [movies, setMovies] = useState([]);
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
            key={movie.id}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            //isLarge is for netflix originals which is needed to be displayed in  portrait.
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(`${movie.id}`)}
          ></img>

          //here in another div we can give the add favourites on hover and on click add favorites is added
          //check why not working

          // <AddFavourites onClick={props.handlefavclick(movie)}/>
        ))}
      </div>
    </div>
  );
}

export default Row;
