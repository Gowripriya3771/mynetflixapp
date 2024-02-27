import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function MovieDetails({id}) {
  const [details, setDetails] = useState([]);

  const options = {
    method: "GET",
    url: `{https://api.themoviedb.org/3/movie/${id}}`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTAwY2Q3NGE3MzE0YjU4ODdhNzc2NmY3MzIwMjYzMiIsInN1YiI6IjY1NDRjOTk0OWQ2ZTMzMDZjYWJiNDM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hfBsBUqOC0cQIDWQveMVWfsrJ2uorp6QJ_Iaj86ugMk",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setDetails(response.data)
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  const navigate = useNavigate();
  function handleNavigate() {
    // to go back to previous page
    navigate(-1);
  }
  return (
    <div>
      <Navbar />
      <button onClick={handleNavigate}>Back</button>
      {details.map((item) => console.log(item))}
      <h1></h1>
      <h1>Duration</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        aperiam mollitia eaque ullam ab perspiciatis facilis quod eos adipisci
        sit minima qui, ab perspiciatis facilis quod eos adipisci sit minima
        qui, assumenda eum consequatur odio id nihil reprehenderit iure!
      </p>
      <button>Play</button>
      <button> + My List</button>
      {/* <img>Like icon</img>
      <img>Dislike icon</img> */}
    </div>
  );
}

export default MovieDetails;
//dynamically navigate details based on movie id
//more like this rail under the details which belongs to the same genre
