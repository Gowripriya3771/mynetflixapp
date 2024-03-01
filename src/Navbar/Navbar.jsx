import { useEffect, useState } from "react";
import axios from "../axios";
import "../Navbar/Navbar.css";
import requests from "../requests";

function Navbar() {
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requestSearch = await axios.get(requests.fetchSearchResults);
      console.log("@orange", requestSearch);
      setSearchTerm(requestSearch.data.results);
    }

    fetchData();
  }, []);
  // function handleSearch(event) {
  //   setSearch(event.target.value);
  // }
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="logo"
      ></img>
      <input
        className="search"
        type="text"
        // value={value}
        placeholder="Search your movies here"
        onChange={(event) => setSearch(event.target.value)}
      ></input>
      <h1>{search}</h1>
      <img
        className="avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      ></img>
    </div>
  );
}

export default Navbar;
