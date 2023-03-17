import { Outlet, useOutlet, useOutletContext } from "react-router-dom";

import Error404 from "~/features/error/pages/Error404";

export default function PrivateRoute() {
    const isLoggedIn = true;

    if (isLoggedIn) return <Outlet />;

    return <Error404 />;
}
