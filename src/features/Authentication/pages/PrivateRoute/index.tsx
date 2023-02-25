import { Outlet } from "react-router-dom";

import Error404 from "~/features/Error/pages/Error404";

export default function PrivateRoute() {
    const isLoggedIn = true;

    if (isLoggedIn) return <Outlet />;

    return <Error404 />;
}
