import { createRef } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { AuthRouteObject } from "@/@types";
import ErrorBoundary from "@/features/error/components/ErrorBoundary";
import Error404 from "@/features/error/pages/Error404";

import { adminRoute } from "./routes/admin";
import { allRoute } from "./routes/all";
import { guestRoute } from "./routes/guest";
import { studentRoute } from "./routes/student";
import { userRoute } from "./routes/user";

export const resolveAllRoutes = (...routes: AuthRouteObject[]): AuthRouteObject[] => {
  return routes.map((route) => {
    route.errorElement = <ErrorBoundary />;
    if (route.layout)
      route.element = <route.layout priviliges={route.priviliges}>{route.element}</route.layout>;
    if (route.children) route.children = resolveAllRoutes(...route.children);
    route.nodeRef = createRef();
    return route;
  });
};

export const resolvedRoutes = resolveAllRoutes(
  {
    path: "/",
    element: window.innerWidth <= 1200 ? <Navigate to="home" /> : <Navigate to="login" />,
  },
  guestRoute,
  allRoute,
  userRoute,
  adminRoute,
  studentRoute,
  {
    path: "*",
    element: <Error404 />,
  }
);

export const browserRouter = createBrowserRouter(resolvedRoutes);
