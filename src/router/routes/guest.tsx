import { AuthRouteObject } from "~/@types";
import PrivateRoute from "~/features/Authentication/components/PrivateRoute";
import Login from "~/features/Authentication/pages/Login";
import OTP from "~/features/Authentication/pages/OTP";
import PasswordRecovery from "~/features/Authentication/pages/PasswordRecovery";
import ResetPassword from "~/features/Authentication/pages/ResetPassword";
import SignUp from "~/features/Authentication/pages/SignUp";
import GuestLayout from "~/features/Layout/pages/GuestLayout";

export const guestRoute: AuthRouteObject[] = [
    {
        path: "/home",
        element: <div>landing home</div>,
    },
    {
        path: "/sign-up",
        element: <SignUp />,
        layout: GuestLayout,
    },
    {
        path: "/login",
        element: <Login />,
        layout: GuestLayout,
    },
    {
        path: "/password-recovery",
        element: <PrivateRoute />,
        children: [
            {
                path: "/password-recovery",
                element: <PasswordRecovery />,
                layout: GuestLayout,
            },
            {
                layout: GuestLayout,
                path: "otp",
                element: <OTP />,
            },
            {
                layout: GuestLayout,
                path: "reset",
                element: <ResetPassword />,
            },
        ],
    },
];
