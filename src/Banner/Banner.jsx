import { base_url } from "../Row/Row";
import axios from "../axios";
import requests from "../requests";
import { useEffect, useState } from "react";
import "../Banner/Banner.css";
import LinesEllipsis from "react-lines-ellipsis";
import { useNavigate } from "react-router-dom";

function Banner() {
  
 
  //   const handleBannerClick=(id)=>{
  //     const name=movie.filter((item)=>item.id===id)
  //     myListArray=[...myListArray,name]
  
  //   }
  //   const item=myListArray.map((obj)=>obj.poster_path);
  //   console.log("item",item)
 
 
  // console.log("hihhihi",myListArray)
  const navigate = useNavigate();
  function handlePlayClick() {
    navigate("/player");
  }

  //this state is to set the banner random image
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      //this will select any random obj from the array of object
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

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
        <h1 className="titleMovie">
          {movie?.title || movie?.original_name || movie?.name}
        </h1>
        <div className="buttons">
          <button className="playButton" onClick={handlePlayClick}>
            Play
          </button>
          <button
            className="listButton"
           
          >
            My List
          </button>
        </div>
        <p className="overview">
          {/* an external react package used for setting max line in description */}
          <LinesEllipsis
            text={movie.overview}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </p>
        {/* <div>{item}</div> */}
      </div>
    </header>
  );
}

export default Banner;
