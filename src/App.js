import logo from "./logo.svg";
import "./App.css";
import Movie from "./components/Movie";
import MoviePage from "./components/MoviePage";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Pelicula from "./components/Pelicula";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/moviepage" element={<MoviePage />} />
        <Route path="/pelicula/:id" element={<Pelicula />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
