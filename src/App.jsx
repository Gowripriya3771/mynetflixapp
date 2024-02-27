import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MovieDetails from "./MovieDetails";
import Player from "./Player";

function App() {
  return (
    <div className="app">
      {/* Adding routes */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<MovieDetails />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
