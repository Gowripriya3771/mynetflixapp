import React from "react";

import "../App/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "../Home/Home";
import MovieDetails from "../MovieDetails/MovieDetails";
import Player from "../Player";
import Navbar from "../Navbar/Navbar";
import Login from "../LoginPage/Login";
import Home from "../Home/Home";
import { useState } from "react";
import { base_url } from "../Row/Row";

function App() {
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState([]);

  return (
    <div className="app">
      {/* Adding routes */}
      <Router>
        <Navbar
          search={search}
          searchTerm={searchTerm}
          setSearch={setSearch}
          setSearchTerm={setSearchTerm}
        />
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
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<MovieDetails />} />
            <Route path="/player/:id" element={<Player />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
//remove lazy loading...
