import { Link } from "react-router-dom";
import classes from "./Movie.module.css";

type ComponentProps = { id: string; original_title: string; overview: string };
function Movie({ id, original_title, overview }: ComponentProps) {
    //   console.log(id, original_title, overview);
    return (
        <li className={classes.movie}>
            <Link to={id}>
                <p className={classes.original_title}>{original_title}</p>
                <p className={classes.overview}>{overview}</p>
            </Link>
        </li>
    );
}

export default Movie;
