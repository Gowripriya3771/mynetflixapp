import Banner from "../Banner/Banner";
import Row from "../Row/Row";
import requests from "../requests";
import "../Home/Home.css";
// import { useState } from "react";

function Home() {
  // const [page,setPage]=useState(0)
  // function handlePrevClick(){
  //   setPage(page+1);
  // }

  const fetchUrl = Object.values(requests);

  return (
    <div>
      {/* for each row the title and the url is passed */}
      <Banner />
      {/* <button onClick={handlePrevClick}>Prev</button> */}
      <Row
        // pageNumber={page}
        title="NETFLIX ORIGINALS"
        fetchUrl={fetchUrl[0]}
        isLargeRow={true}
      />
      {/* <button>Next</button> */}
      <Row title="Trending Now" fetchUrl={fetchUrl[1]} />
      <Row title="Top Rated" fetchUrl={fetchUrl[2]} />
      <Row title="Action movies" fetchUrl={fetchUrl[3]} />
      <Row title="Comedy Movies" fetchUrl={fetchUrl[4]} />
      <Row title="Horror Movies" fetchUrl={fetchUrl[5]} />
      <Row title="Romance movies" fetchUrl={fetchUrl[6]} />
      <Row title="Documentaries" fetchUrl={fetchUrl[7]} />
    </div>
  );
}

export default Home;
