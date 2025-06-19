import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classes from "./Movie.module.css";

function Movie({ id, original_title, overview }) {
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

Movie.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  original_title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Movie;
