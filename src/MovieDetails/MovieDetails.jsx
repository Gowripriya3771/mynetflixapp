import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import { base_url } from "../Row/Row";
import LinesEllipsis from "react-lines-ellipsis";

import "./MovieDetails.css";
// import SimilarMovies from "../SimilarMovies/SimilarMovies";

function MovieDetails() {
  const [details, setDetails] = useState("");
  const [credits, setCredits] = useState({});
  const [recommendation, setRecommendation] = useState([]);
  console.log("@apple", recommendation);

  // console.log("@@@", typeof credits.crew);
  // const arrayFiltered=credits.crew;
  // console.log("@@@",arrayFiltered)
  // const crewFiltered=arrayFiltered.filter((obj)=>obj.job==="Characters")
  // console.log(crewFiltered)
  // const {id1}=useParams();

  const { id } = useParams();
  const d = new Date(details.release_date);
  const movieYear = d.getFullYear();

  useEffect(() => {
    async function fetchData() {
      console.log(requests.fetchMovieDetails.replace("id", id.toString()));
      // id is replaced by dynamically passed id parameter ${id}
      const detailsRequest = await axios.get(
        requests.fetchMovieDetails.replace("id", id.toString())
      );

      console.log(detailsRequest.data);
      console.log(
        "@gowri",
        requests.fetchMovieCredits.replace("id", id.toString())
      );
      const creditsRequest = await axios.get(
        requests.fetchMovieCredits.replace("id", id.toString())
      );

      console.log(creditsRequest.data);

      const movieRecommendation = await axios.get(
        requests.fetchMovieRecommendations.replace("id", id.toString())
      );
      console.log("test1", movieRecommendation.data.results);
      setRecommendation(movieRecommendation.data.results);
      console.log("@@@", recommendation);
      setDetails(detailsRequest.data);
      setCredits(creditsRequest.data);
    }

    fetchData();
  }, [id]);

  const navigate = useNavigate();
  function handleNavigate() {
    navigate(-1);
  }
  return (
    <div>
      <span onClick={handleNavigate} className="material-symbols-outlined">
        arrow_back
      </span>
      <header
        className="detailsBanner"
        style={{
          backgroundImage: `url(${base_url}${details.backdrop_path})`,
        }}
      >
        <div className="details-contents">
          {/* <img src={`${base_url}${details?.poster_path}`} alt={details?.name} /> */}
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
            <h3>{movieYear}</h3>
          </div>

          <div className="genre">
            <h1>
              {" "}
              Genre: {details?.genres?.map((item) => item.name).join(",")}
            </h1>
          </div>

          <div></div>

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
        <div>
          <h2>Cast:</h2>
          <h3>
            {credits?.cast
              ?.filter((item) => item?.known_for_department === "Acting")
              .map((obj) => obj.original_name)?.slice(0,7)
              .join(",")}
          </h3>

          <h3>
            Director:{" "}
            {credits?.crew?.filter((item) => item?.job === "Director")[0]?.name}
          </h3>
        </div>
      </header>
      <h1>More Like This</h1>
      <div className="similarMovies">
        {recommendation?.map((movieObj) => (
          <img
            className="similarImages"
            key={movieObj.id}
            src={`${base_url}${movieObj?.poster_path}`}
            alt={movieObj?.name}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default MovieDetails;
