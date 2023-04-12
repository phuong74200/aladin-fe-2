import { AuthRouteObject } from "@/@types";
import PrivateRoute from "@/features/authentication/components/PrivateRoute";

export const userRoute: AuthRouteObject = {
  path: "/user",
  element: <PrivateRoute />,
  children: [
    {
      path: "/user",
      element: <div>profile default</div>,
      priviliges: [],
    },
    {
      path: "profile1",
      element: <div>profile 1</div>,
      priviliges: [],
    },
    {
      path: "profile2",
      element: <div>profile 2</div>,
    },
  ],
};
