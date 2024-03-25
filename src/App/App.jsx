import "../App/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "../Home/Home";
import MovieDetails from "../MovieDetails/MovieDetails";
import Player from "../Player/Player";
import Navbar from "../Navbar/Navbar";
import Login from "../LoginPage/Login";
import Home from "../Home/Home";
import { useState } from "react";
import { base_url } from "../Row/Row";
import MyList from "../MyList/MyList";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState([]);

  return (
    <div className="app">
      {/* Adding routes */}
      {/* in navbar component the search and serach term value is given */}
      <Router>
        <Navbar
          search={search}
          searchTerm={searchTerm}
          setSearch={setSearch}
          setSearchTerm={setSearchTerm}
        />
        {/* logic:if input contains the search input and searchterm is 0 then no results else show the search results */}
        {search && searchTerm.length === 0 ? (
          <div
            style={{
              color: "goldenrod",
              textAlign: "center",
              fontSize: "larger",
            }}
          >
            <h1>Oops! No results found!</h1>
          </div>
        ) : searchTerm.length > 0 ? (
          <div className="mainResults">
            <h1>Search Results</h1>
            <div className="searchResults">
              {searchTerm?.map((obj) => (
                <div key={obj.id} className="searchBox">
                <img
                  className="searchResultImage"
                  src={`${base_url}${obj.poster_path}`}
                  key={obj.id}
                  onError="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                /><h1 className="objtitle">{obj.title}</h1>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<MovieDetails />} />
            <Route path="/player/:id" element={<Player />} />
            <Route path="/login" element={<Login />} />

            <Route path="/list" element={<MyList />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
//remove lazy loading...
