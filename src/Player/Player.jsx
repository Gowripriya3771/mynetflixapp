import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../axios";
import requests from "../requests";
import "./Player.css";

function Player() {
  const navigate = useNavigate();
  const [urlKey, seturlKey] = useState("");
  const { id } = useParams();
  const opts = {
    width: "1920px",
    height:"900px",
    borderRadius: "2rem",
    playerVars: { autoplay: 1 },
  };

  useEffect(() => {
    async function fetchData() {
      const videoRequest = await axios.get(
        requests.fetchVideoTrailer.replace("movie_id", id.toString())
      );
      console.log("videeRequest:", videoRequest);
      const videoData = videoRequest.data.results
        .filter((item) => item.type == "Trailer")
        .map((obj) => obj.key)[0];
      // Filter the trailer
      // Set the urlKey to the key value
      seturlKey(videoData);
    }
    fetchData();
  }, [id]);

  function handleBackClick() {
    navigate(-1);
  }
  return (
    <div>
      {/* <button onClick={handleBackClick}> Back</button> */}
      <span onClick={handleBackClick} className="material-symbols-outlined">
        arrow_back
      </span>
      {/* <h1>This is the player page</h1> */}
      <YouTube videoId={urlKey} opts={opts} className="player"/>
     
    </div>
  );
}

export default Player;
