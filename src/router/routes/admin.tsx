import { Link } from "react-router-dom";

import { AuthRouteObject } from "@/@types";
import PrivateRoute from "@/features/authentication/components/PrivateRoute";
import AdminLayout from "@/features/layout/pages/AdminLayout";

export const adminRoute: AuthRouteObject = {
  path: "/admin",
  element: <PrivateRoute />,
  children: [
    {
      path: "/admin",
      element: (
        <div>
          <Link to="/user">profile default</Link>
        </div>
      ),
      layout: AdminLayout,
      priviliges: [],
    },
  ],
};
