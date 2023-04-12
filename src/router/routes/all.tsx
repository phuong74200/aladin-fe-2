import { AuthRouteObject } from "@/@types";
import HomePage from "@/features/landing/pages/HomePage";
import LandingLayout from "@/features/layout/pages/LandingLayout";

export const allRoute: AuthRouteObject = {
  path: "/home",
  element: <HomePage />,
  layout: LandingLayout,
};
