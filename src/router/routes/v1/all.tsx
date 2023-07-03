import { AuthRouteObject } from "@/@types";
import Login from "@/features/v1/authentication/pages/login";
import OTP from "@/features/v1/authentication/pages/otp";
import PasswordRecovery from "@/features/v1/authentication/pages/password-recovery";
import ResetPassword from "@/features/v1/authentication/pages/reset-password";
import SignUp from "@/features/v1/authentication/pages/sign-up";
import GuestLayout from "@/features/v1/layout/guest-layout";
import StudentLayout from "@/features/v1/layout/student-layout";
import UserProfile from "@/features/v1/profile/pages/user-profile";

export const allRoute: AuthRouteObject[] = [
  {
    path: "login",
    layout: GuestLayout,
    element: <Login />,
  },
  {
    path: "profile",
    layout: StudentLayout,
    element: <UserProfile />,
  },
  {
    path: "sign-up",
    layout: GuestLayout,
    element: <SignUp />,
  },
  {
    path: "password-recovery",
    layout: GuestLayout,
    element: <PasswordRecovery />,
  },
  {
    layout: GuestLayout,
    path: "password-recovery/otp",
    element: <OTP />,
  },
  {
    layout: GuestLayout,
    path: "password-recovery/reset",
    element: <ResetPassword />,
  },
];
