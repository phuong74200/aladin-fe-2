import { ButtonProps } from "@mantine/core";
import { IconBook } from "@tabler/icons-react";

export interface NavBarItemConfig {
  link: string;
  label: string;
  links?: { link: string; label: string; icon?: React.ElementType }[];
  icon?: React.ElementType;
  varient?: ButtonProps["variant"];
}

export const navbarData: NavBarItemConfig[] = [
  {
    label: "Ôn tập",
    icon: IconBook,
    link: "google.com",
    varient: "subtle",
  },
  {
    label: "Đăng nhập",
    // icon: IconBook,
    link: "google.com",
  },
  {
    label: "Đăng ký",
    // icon: IconBook,
    link: "google.com",
  },
];
