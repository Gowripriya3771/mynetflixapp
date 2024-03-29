import { useEffect, useState } from "react";
import axios from "../axios";
import "../Navbar/Navbar.css";
import requests from "../requests";

import { useNavigate } from "react-router-dom";

function Navbar({ search, searchTerm, setSearch, setSearchTerm }) {
  const [open, setOpen] = useState(false);
  const menus = ["Profile","MyList", "LogOut"];

  const navigate = useNavigate();
  function handleAvatarClick() {
    setOpen(!open);
  }
  function handleListClick(item) {
    if (item === "LogOut") {
      localStorage.clear();
      navigate("/login");
      window.location.reload();
    }
    if(item==="MyList"){
      navigate("/list")
    }
    setOpen(!open)
  }

  useEffect(() => {
    async function fetchData() {
      const requestSearch = await axios.get(
        requests.fetchSearchResults.replace("searchh", `${search}`)
      );

      setSearchTerm(requestSearch.data.results);
      console.log("@key", requestSearch.data.results);
      console.log("test1", searchTerm);
    }

    fetchData();
  }, [search]);

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
      {/* <h1>{search}</h1> */}
      <div>
        <img
          onClick={handleAvatarClick}
          className="avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        ></img>
        {open && (
          <div className="avatarDropdown" style={{ position: "absolute" }}>
            <ul
              className="dropDown"
              style={{
                backgroundColor: "white",
                color: "black",
              }}
            >
              {menus.map((item) => (
                <li
                  onClick={() => handleListClick(item)}
                  className="items"
                  key={item}
                  style={{ listStyle: "none", cursor: "pointer" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

//if is logged in then set profile to your name
//search useEffect problems
//when dependency array (search and searchterm) is added,it is causing infinite rendering
