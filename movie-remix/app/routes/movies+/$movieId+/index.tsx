import { useLoaderData, useLocation } from "react-router";
// import type { ActionFunctionArgs } from "@remix-run/node";
// import Movie from "../../../components/Movie";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal";

type MovieProps = {
    id: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: string;
};
function MovieRoute() {
    const data = useLoaderData() as { movie: MovieProps };
    // console.log("Data:", data);
    const movie = data.movie;
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const page: number = Number(queryParams.get("page"));

    return (
        <Modal>
            <div>
                <div
                    className={
                        "bg-[hsl(0_0%_10%)] rounded-lg shadow-normal my-4 mx-auto p-4 grid gap-4 grid-cols-3 grid-flow-dense justify-center w-full"
                    }
                >
                    <p className="justify-self-start max-w-[600px]">
                        {
                            <img
                                alt={movie.poster_path}
                                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                            />
                        }
                    </p>
                    <div className="justify-start col-span-2 z-10 font-body">
                        <p className="text-xl text-[#dddddd] m-0 uppercase">
                            {movie.original_title}
                        </p>
                        <p className="italic text-[0.8rem] text-[#b0b0b0] whitespace-pre-wrap">
                            {movie.release_date}
                        </p>
                        <p className="mt-4 text-white">{movie.overview}</p>
                        <div className="grid">
                            <Link
                                to={`/movies?page=${page}`}
                                className="no-underline text-neutral-400 hover:text-neutral-500 absolute bottom-8 right-4"
                            >
                                <p className="text-2xl">Back</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

// export const action = async ({ params }: ActionFunctionArgs) => {
//     return redirect(`/movies/${params.id}`);
// };

export async function loader({ params }: { params: { movieId: string } }) {
    // console.log('http://localhost:8080/movies/' + params.movieId);
    const response = await fetch(
        "http://localhost:8080/movies/" + params.movieId
    );
    // console.log(params.movieId);
    const resData = await response.json();
    // console.log("resData:", resData.movie);
    // return redirect(`/movies/${params.movieId}`);
    console.log("TEST TWO");
    return resData;
}

export default MovieRoute;
