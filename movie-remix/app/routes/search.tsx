import { Outlet } from "@remix-run/react";

export default function SearchRoute() {
  return (
    <div>
      <h1>Search</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}