import { AuthRouteObject } from "~/@types";
import PrivateRoute from "~/features/authentication/components/PrivateRoute";
import Login from "~/features/authentication/pages/Login";
import OTP from "~/features/authentication/pages/OTP";
import PasswordRecovery from "~/features/authentication/pages/PasswordRecovery";
import ResetPassword from "~/features/authentication/pages/ResetPassword";
import SignUp from "~/features/authentication/pages/SignUp";
import GuestLayout from "~/features/layout/pages/GuestLayout";
import TransitionLayout from "~/features/layout/pages/TransitionLayout";

export const guestRoute: AuthRouteObject = {
  path: "/",
  element: <PrivateRoute />,
  layout: GuestLayout,
  children: [
    {
      path: "login",
      element: <Login />,
      layout: TransitionLayout,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
      layout: TransitionLayout,
    },
    {
      path: "/password-recovery",
      element: <PrivateRoute />,
      layout: TransitionLayout,
      children: [
        {
          path: "/password-recovery",
          element: <PasswordRecovery />,
          layout: TransitionLayout,
        },
        {
          layout: TransitionLayout,
          path: "otp",
          element: <OTP />,
        },
        {
          layout: TransitionLayout,
          path: "reset",
          element: <ResetPassword />,
        },
      ],
    },
  ],
};
