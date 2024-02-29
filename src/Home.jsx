import Navbar from "./Navbar";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./requests";
import "./Home.css";
import { useState } from "react";

function Home() {
  const fetchUrl = Object.values(requests);
  const [search, setSearch] = useState("");
  //check why its not working
  // const [movies, setMovies] = useState([]);
  // console.log(movies)
  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(fetchUrl);
  //     console.log(request.data.results);
  //     setMovies(request.data.results);
  //     return request.data.results;
  //   }
  //   fetchData();
  // }, [fetchUrl]);

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      <Banner />

      {/* for each row the title and the url is passed */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={fetchUrl[0]} isLargeRow={true} />
      <Row
        title="Trending Now"
        fetchUrl={fetchUrl[1]}
        search={search}
        setSearch={setSearch}
      />
      <Row title="Top Rated" fetchUrl={fetchUrl[2]} />
      <Row title="Action movies" fetchUrl={fetchUrl[3]} />
      <Row title="Comedy Movies" fetchUrl={fetchUrl[4]} />
      <Row title="Horror Movies" fetchUrl={fetchUrl[5]} />
      <Row title="Romance movies" fetchUrl={fetchUrl[6]} />
      <Row title="Documentaries" fetchUrl={fetchUrl[7]} />
      {/* <AddFavourites /> */}
      {/* <Row title="Favourites" fetchUrl={favourites}/> */}
    </div>
  );
}

export default Home;