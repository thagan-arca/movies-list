export default function MovieRoute() {
  return (
    <div>
      <p>Example Movie</p>
      <p>
        This movie entry is an example and these will be populated by GET requests to TMDB in the future.
      </p>
    </div>
  );
}

export async function loader({params}) {
  // console.log('http://localhost:8080/movies/' + params.movieId);
  const response = await fetch('http://localhost:8080/movies/' + params.movieId);
  console.log(response);
  const resData = await response.json();
  // console.log(resData)
  return resData || "ERR";
}
