import { IconBook, IconSchool } from "@tabler/icons-react";

export const navbarData = [
  {
    label: "HỌC TA",
    initiallyOpened: true,
    icon: IconSchool,
    link: "google.com",
    links: [
      {
        label: "Application Development",
        link: "youtube.com",
      },
      {
        label: "Data Analysis",
        link: "google.com",
      },
      {
        label: "Business Administration",
        link: "fb.com",
      },
    ],
  },
  {
    label: "ÔN TẬP",
    icon: IconBook,
    link: "google.com",
  },
];
