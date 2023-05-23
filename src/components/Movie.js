import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Movie(props) {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const urlApiMovies = "http://localhost:3000/api/movies?pageSize=30&page=1";
    fetch(urlApiMovies)
      .then((response) => response.json())
      .then((data) => setMovie(data.find((m) => m._id === id)));
  }, []);

  //console.log(movie);

  return (
    <div>
      <img src={movie.poster} />
      <h2>Nombre de la pelicula: {movie.title}</h2>
      <h2>Trama completa: {movie.fullplot}</h2>
    </div>
  );
}
