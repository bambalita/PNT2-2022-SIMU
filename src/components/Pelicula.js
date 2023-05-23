import { Link } from "react-router-dom";

export default function Pelicula(props) {
  return (
    <div>
      <Link to={`/movie/${props.id}`}>
        <img src={props.poster} />
      </Link>
      <h2>{props.titulo}</h2>
      <h2>{props.trama}</h2>
    </div>
  );
}
