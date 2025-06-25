import { Link } from "react-router-dom";
// import classes from "./Movie.module.css";

type ComponentProps = {
    id: string;
    original_title: string;
    overview: string;
    image: React.ReactElement;
    release_date: string;
};

function Movie({
    id,
    original_title,
    // overview,
    image,
    release_date,
}: ComponentProps) {
    //   console.log(id, original_title, overview);
    return (
        <li
            className={
                "bg-[hsl(0_0%_10%)] rounded-lg shadow-normal animate-entry list-none my-4 mx-auto p-4 grid gap-4 grid-cols-1 justify-center w-[25rem]"
            }
        >
            <Link to={`/movies/${id}`} className="no-underline">
                <p className="justify-center">{image}</p>
                <p className="text-xl text-[#dddddd] m-0 uppercase font-body mt-3">
                    {original_title}
                </p>
                {/* <p className={classes.overview}>{overview}</p> */}
                <p className="italic text-[0.8rem] text-[#b0b0b0] mt-1 whitespace-pre-wrap">
                    {release_date}
                </p>
            </Link>
        </li>
    );
}

// TAILWIND
// "bg-[hsl(0_0%_10%)] rounded-lg shadow-normal animate-entry list-none mx-4 my-auto p-4 grid gap-4 grid-cols-1 justify-center w-100"
// "justify-center"
// "text-xl font-bold text-[#dddddd] m-0 uppercase"
// "italic text-[0.8rem] text-[#b0b0b0] mt-1 whitespace-pre-wrap"

export default Movie;
