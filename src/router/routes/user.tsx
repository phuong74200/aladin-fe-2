import { AuthRouteObject } from "~/@types";
import App from "~/App";
import PrivateRoute from "~/features/Authentication/pages/PrivateRoute";

export const userRoute: AuthRouteObject = {
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
};
