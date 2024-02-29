import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "./axios";
import { base_url } from "./Row";
import LinesEllipsis from "react-lines-ellipsis";

import "./MovieDetails.css";
import SimilarMovies from "./SimilarMovies";

function MovieDetails() {
  const [details, setDetails] = useState("");
  const { id } = useParams();

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTAwY2Q3NGE3MzE0YjU4ODdhNzc2NmY3MzIwMjYzMiIsInN1YiI6IjY1NDRjOTk0OWQ2ZTMzMDZjYWJiNDM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hfBsBUqOC0cQIDWQveMVWfsrJ2uorp6QJ_Iaj86ugMk",
    },
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.request(options);
      console.log(request.data);
      console.log(request.data.overview);
      // console.log(request.data.genres[0].name);
      setDetails(request.data);
      return;
    }

    fetchData();
  }, []);

  const navigate = useNavigate();
  function handleNavigate() {
    // to go back to previous page
    navigate(-1);
  }
  return (
    <div>
      <Navbar />
      <span onClick={handleNavigate} className="material-symbols-outlined">
        arrow_back
      </span>
      <header
        className="detailsBanner"
        style={{
          marginTop: "0",
          backgroundSize: "cover",
          backgroundImage: `url(${base_url}${details.backdrop_path})`,
          backgroundPosition: "center center",
          height: "550px",
        }}
      >
        <div className="details-contents">
          {/* <img src={`${base_url}${movie.backdrop_path}`} alt={movie.name} /> */}
          <h1 className="titleMovies">
            {details?.title || details?.original_name || details?.name}
          </h1>
          <div
            className="movieRating"
            style={{ display: "flex", flexDirection: "row", gap: "10px" }}
          >
            <span className="material-symbols-outlined">star</span>
            <h3>{details.vote_average}</h3>

            <h3>{details.runtime}min</h3>
            <h3>{details.release_date}</h3>
          </div>
          {/* <div className="genre">
            Genre:{details.genres[0].name},{details.genres[1]?.name}
          </div> */}

          <div className="buttons">
            <button className="playButton">Play</button>
            <button className="listButton">My List</button>
          </div>
          <p className="overview">
            {/* an external react package used for setting max line in description */}
            <LinesEllipsis
              text={details.overview}
              maxLine="3"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </p>
        </div>
      </header>
      <h1>More Like This</h1>
      <SimilarMovies data={details}/>
      {/* TO-DO */}
      {/* Display a set of movies which are of the same genre of the selected movie */}
      {/* Take the genre of this movie details.genre and check it with the movie array filter the array having the same genre and display */}
    </div>
  );
}

export default MovieDetails;

// check why slice is not working
// check why genre access is not working
//dynamically navigate details based on movie id
// more like this rail under the details which belongs to the same genre
