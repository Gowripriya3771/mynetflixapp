
import { useState } from "react";
import "./Navbar.css";

function Navbar() {

  const [search, setSearch] = useState("");
  function handleSearch(event){
    setSearch(event.target.value)
  }
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
        placeholder="Search your movies here"
        onChange={()=>handleSearch(event)}
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
