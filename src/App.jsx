import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MovieDetails from "./MovieDetails";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
