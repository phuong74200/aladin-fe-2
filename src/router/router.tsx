import { createBrowserRouter } from "react-router-dom";

import { AuthRouteObject } from "~/@types";
import App from "~/App";
import PrivateRoute from "~/features/Authentication/pages/PrivateRoute";
import Error404 from "~/features/Error/pages/Error404";
import AdminLayout from "~/features/Layout/pages/Admin";

const resolveRoutes = (routes: AuthRouteObject[]): AuthRouteObject[] => {
    return routes.map((route) => {
        if (route.layout)
            route.element = (
                <route.layout priviliges={route.priviliges}>
                    {route.element}
                </route.layout>
            );
        if (route.children) route.children = resolveRoutes(route.children);
        return route;
    });
};

export const routes: AuthRouteObject[] = [
    {
        path: "/",
        element: <div>landing</div>,
    },
    {
        path: "admin",
        element: <PrivateRoute />,
        children: [
            {
                path: "/admin",
                element: <div>profile default</div>,
                layout: AdminLayout,
                priviliges: [],
            },
        ],
    },
    {
        path: "user",
        element: <PrivateRoute />,
        children: [
            {
                path: "/user",
                element: <div>profile default</div>,
                layout: App,
                priviliges: [],
            },
            {
                path: "profile1",
                element: <div>profile 1</div>,
                priviliges: [],
                layout: App,
            },
            {
                path: "profile2",
                element: <div>profile 2</div>,
                layout: App,
            },
        ],
    },
    {
        path: "*",
        element: <Error404 />,
    },
];

export const browserRouter = createBrowserRouter(resolveRoutes(routes));
