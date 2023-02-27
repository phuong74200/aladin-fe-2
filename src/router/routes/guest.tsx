import { AuthRouteObject } from "~/@types";
import SignUp from "~/features/Authentication/pages/SignUp";
import GuestLayout from "~/features/Layout/pages/GuestLayout";

export const guestRoute: AuthRouteObject[] = [
    {
        path: "/home",
        element: <div>landing home</div>,
    },
    {
        path: "/login",
        element: <SignUp />,
        layout: GuestLayout,
    },
];
