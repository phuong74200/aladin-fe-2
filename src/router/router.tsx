import { createBrowserRouter, Navigate } from "react-router-dom";

import { adminRoute } from "./routes/admin";
import { guestRoute } from "./routes/guest";
import { userRoute } from "./routes/user";

import { AuthRouteObject } from "~/@types";
import Error404 from "~/features/Error/pages/Error404";

const resolveAllRoutes = (...routes: AuthRouteObject[]): AuthRouteObject[] => {
    return routes.map((route) => {
        if (route.layout)
            route.element = (
                <route.layout priviliges={route.priviliges}>
                    {route.element}
                </route.layout>
            );
        if (route.children)
            route.children = resolveAllRoutes(...route.children);
        return route;
    });
};

export const browserRouter = createBrowserRouter(
    resolveAllRoutes(
        {
            path: "/",
            element: <Navigate to="home" />,
        },
        ...guestRoute,
        userRoute,
        adminRoute,
        {
            path: "*",
            element: <Error404 />,
        }
    )
);
