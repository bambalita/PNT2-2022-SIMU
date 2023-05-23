import { useEffect, useState } from "react";
import Movies from "./Movies";

export default function MoviePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const urlApiMovies = "http://localhost:3000/api/movies?pageSize=30&page=1";

    fetch(urlApiMovies)
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  //console.log(movies);

  return <Movies movies={movies} />;
}
