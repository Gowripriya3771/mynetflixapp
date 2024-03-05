import "../App/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import MovieDetails from "../MovieDetails/MovieDetails";
import Player from "../Player";
import Navbar from "../Navbar/Navbar";
import Login from "../LoginPage/Login";

//TO-DO
// add video trailer 
//add mylist
//add account settings 

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* Adding routes */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<MovieDetails />} />
          <Route path="/player" element={<Player />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
