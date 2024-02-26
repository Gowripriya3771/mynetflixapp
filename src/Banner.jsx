import { base_url } from "./Row";
import axios from "./axios";
import requests from "./requests";
import { useEffect, useState } from "react";
import "./Banner.css";

function Banner() {
  //this state is to set the banner random image
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // this will fetch the netflix originals data
      const request = await axios.get(requests.fetchNetflixOriginals);
      //this will select any random obj from the array of object
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      //   setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie.backdrop_path})`,
        backgroundPosition: "center center",
        height: "550px",
      }}
    >
      <div className="banner-contents">
        {/* <img src={`${base_url}${movie.backdrop_path}`} alt={movie.name} /> */}
        <h1 className="titleMovie">{movie?.title||movie?.original_name||movie?.name}</h1>
        <div className="buttons">
          <button className="playButton">Play</button>
          <button className="listButton">My List</button>
        </div>

        <p className="overview">{movie.overview}</p>
      </div>
    </header>
  );
}

export default Banner;
