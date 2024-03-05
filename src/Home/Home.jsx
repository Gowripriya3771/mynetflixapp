import Banner from "../Banner/Banner";
import Row, { base_url } from "../Row/Row";
import requests from "../requests";
import "../Home/Home.css";

function Home({ search, setSearch, searchTerm, setSearchTerm }) {
  const fetchUrl = Object.values(requests);
  console.log("@gowrii", searchTerm);

  return (
    <div>
      <Banner />
      {searchTerm.length > 0 ? (
        <div className="mainResults">
          <h1>Search Results</h1>
          <div className="searchResults">
            {searchTerm?.map((obj) => (
              <img
                className="searchResultImage"
                src={`${base_url}${obj.poster_path}`}
                key={obj.id}
              />
            ))}
            {/* <h3>{searchTerm.map((obj)=>obj.title)}</h3> */}
          </div>
        </div>
      ) : (
        <div>
          {/* <h1>No results found</h1> */}
          <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={fetchUrl[0]}
            isLargeRow={true}
          />
          <Row title="Trending Now" fetchUrl={fetchUrl[1]} />
          <Row title="Top Rated" fetchUrl={fetchUrl[2]} />
          <Row title="Action movies" fetchUrl={fetchUrl[3]} />
          <Row title="Comedy Movies" fetchUrl={fetchUrl[4]} />
          <Row title="Horror Movies" fetchUrl={fetchUrl[5]} />
          <Row title="Romance movies" fetchUrl={fetchUrl[6]} />
          <Row title="Documentaries" fetchUrl={fetchUrl[7]} />
        </div>
      )}

      {/* for each row the title and the url is passed */}
    </div>
  );
}

export default Home;
