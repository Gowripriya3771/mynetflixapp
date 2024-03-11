import { useNavigate, useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import YouTube from "react-youtube";
import axios from "./axios";
import requests from "./requests";

function Player() {
  const navigate = useNavigate();
  const [urlKey, seturlKey] = useState("");
  const { id } = useParams();

  useEffect(()=>{
    async function fetchData() {
      const videoRequest = await axios.get(
        requests.fetchVideoTrailer.replace("movie_id", id.toString())
      );
      console.log("videeRequest:", videoRequest);
      const videoData= videoRequest.data.results.filter((item)=>item.type=="Trailer").map((obj)=>obj.key)[0]
      // Filter the trailer
      // Set the urlKey to the key value
      seturlKey(videoData);
    }
    fetchData();
  },[]);

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
      <YouTube videoId={urlKey}/>
      {/* <iframe
        width="100%"
        height="800px"
        src="https://www.youtube.com/embed/aqz-KE-bpKQ?si=vLYJ7Dwh4LT226mb"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe> */}
    </div>
  );
}

export default Player;
