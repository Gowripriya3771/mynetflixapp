import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../requests";
import { base_url } from "../Row/Row";
import LinesEllipsis from "react-lines-ellipsis";

import "./MovieDetails.css";
// import YouTube from "react-youtube";

function MovieDetails() {
  const navigated = useNavigate();
  const [details, setDetails] = useState("");
  const [credits, setCredits] = useState({});
  const [recommendation, setRecommendation] = useState([]);
  // const [myId, setMyId] = useState([]);

  const { id } = useParams();
  const d = new Date(details.release_date);
  const movieYear = d.getFullYear();

  // const getList = sessionStorage.getItem("myListItem");
  // const getListItem=JSON.parse(getList)
  const [myList, setMyList] = useState([]);
  function handleTestbutton() {
    // navigated(`/list/${id}`);
    navigated("/list")
  }

  function handleListClick(poster) {
    // spread operator to get the past datas from the array
    // TODO: Check whether movie already exists in myList
    if (!myList.includes(poster)) {
      setMyList([...myList, poster]);

      sessionStorage.setItem("myListItem", JSON.stringify([...myList, poster]));
    }
    if (myList.includes(poster)) {
      alert("Movie already in list");
    }
  }

  //to show similar movies
  function handleSimilarClick(id) {
    navigated(`/details/${id}`);
  }

  //to navigate to player trailer page
  function handlePlayButton() {
    navigated(`/player/${id}`);
  }

  //to delete the movie from my list
  function handleDeleteIcon(itemPoster) {
    console.log("myyy", myList);
    let myUpdatedList = myList.filter((item) => item !== itemPoster);
    setMyList(myUpdatedList);
    sessionStorage.setItem("myListItem", JSON.stringify([...myUpdatedList]));

    console.log("@delete", myUpdatedList);
  }

  useEffect(() => {
    async function fetchData() {
      //to get the details of the movie
      const detailsRequest = await axios.get(
        // id is replaced by dynamically passed id parameter ${id} (fetchurl contains id which is replaced by id that we are passing)
        requests.fetchMovieDetails.replace("id", id.toString())
      );
      //to get the extra details of the movie
      const creditsRequest = await axios.get(
        requests.fetchMovieCredits.replace("id", id.toString())
      );

      //to get the similar movie details
      const movieRecommendation = await axios.get(
        requests.fetchMovieRecommendations.replace("id", id.toString())
      );

      setRecommendation(movieRecommendation.data.results);
      setDetails(detailsRequest.data);
      setCredits(creditsRequest.data);
      console.log("details", details);

      const list = JSON.parse(sessionStorage.getItem("myListItem"));
      //if list is not empty set the list to array
      if (list) {
        setMyList(list);
      }
      // const listy = JSON.parse(sessionStorage.getItem("myListItem"));
      // //if list is not empty set the list to array
      // if (listy) {
      //   setMyList(listy);
      // }
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
          <h1 className="titleMovies">{details?.title || details?.name}</h1>
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
              Genre: {details?.genres?.map((item) => item.name).join(",")}
            </h1>
          </div>

          <div></div>

          <div className="buttons">
            <button className="playButton" onClick={handlePlayButton}>
              Play
            </button>

            <button
              onClick={() =>
                handleListClick(`${base_url}${details.poster_path}`)
              }
              className="listButton"
            >
              My List
            </button>

            {/* <button onClick={handleTestbutton}>My List 2</button> */}
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
          <h3>
            Cast:
            {credits?.cast
              ?.filter((item) => item?.known_for_department === "Acting")
              .map((obj) => obj.original_name)
              ?.slice(0, 7)
              .join(",")}
          </h3>

          <h3>
            Director:
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
            onClick={() => handleSimilarClick(`${movieObj.id}`)}
          ></img>
        ))}
      </div>
      <div>
        <h1>My List</h1>
        <div className="myListContainer">
          {myList != [] &&
            myList.map((item) => (
              <div key={item} className="close">
                <button
                  className="closeButton"
                  onClick={() => handleDeleteIcon(`${item}`)}
                >
                  X
                </button>
                <img
                  className="listImages"
                  key={item}
                  src={item}
                  //here if we give a function to get the details when clicked on mylist as mylist doesnt contain the id it cant be navigate
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

// localStorage.setItem("listData",JSON.stringify([myListArray]))
//const listGet=localStorage.getItem("listData")
// const getListData=JSON.parse(listGet)

//check why after reloading the page the deleted mylist is coming again to the list

//try uselocation and navigate

// navigate("/details" state={data})
// uselocation in the other component
