import "./Navbar.css";

function Navbar(props) {
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
        value={props.value}
        placeholder="Search your movies here"
        onChange={(event) => props.setSearch(event.target.value)}
      ></input>
      <h1>{props.search}</h1>
      <img
        className="avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      ></img>
    </div>
  );
}

export default Navbar;
