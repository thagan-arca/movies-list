import { Outlet } from "react-router-dom";

function Search() {
  return (
    <main>
      <Outlet />
      <main></main>
    </main>
  );
}

export default Search();
