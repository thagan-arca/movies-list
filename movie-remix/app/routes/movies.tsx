import { Outlet } from "@remix-run/react";

const MoviesLayout = () => {
    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MoviesLayout;
