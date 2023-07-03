import { createBrowserRouter, Navigate } from "react-router-dom";

import { AuthRouteObject } from "@/@types";
import ErrorBoundary from "@/features/error/components/ErrorBoundary";
import Error404 from "@/features/error/pages/Error404";

import { v1 } from "./routes/v1";

export const resolveAllRoutes = (...routes: AuthRouteObject[]): AuthRouteObject[] => {
  return routes.map((route) => {
    route.errorElement = <ErrorBoundary />;
    if (route.layout)
      route.element = <route.layout priviliges={route.priviliges}>{route.element}</route.layout>;
    if (route.children) route.children = resolveAllRoutes(...route.children);
    return route;
  });
};

export const resolvedRoutes = resolveAllRoutes(
  {
    path: "/",
    element: <Navigate to="home" />,
  },
  {
    path: "v1",
    children: v1.allRoute,
  },
  // guestRoute,
  // allRoute,
  // userRoute,
  // adminRoute,
  // studentRoute,
  {
    path: "*",
    element: <Error404 />,
  }
);

console.log(resolvedRoutes);

export const browserRouter = createBrowserRouter(resolvedRoutes);
