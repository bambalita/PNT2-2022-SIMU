import { Link } from "react-router-dom";
import Pelicula from "./Pelicula";

export default function Movies(props) {
  //console.log(props);

  return (
    <ul>
      {props.movies.map((m) => {
        return (
          <div>
            <li>
              <Link to={`/movie/${m._id}`}>{m.title}</Link>
              <Pelicula
                id={m._id}
                poster={m.poster}
                titulo={m.title}
                trama={m.fullplot}
              />
            </li>
          </div>
        );
      })}
      ;
    </ul>
  );
}
