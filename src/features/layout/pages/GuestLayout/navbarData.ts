import { IconBook, IconSchool, IconUser, IconUserPlus, IconUsers, IconUsersGroup } from "@tabler/icons-react";

export const navbarData = [
  {
    label: "Học trợ giảng",
    initiallyOpened: true,
    icon: IconSchool,
    link: "google.com",
    links: [
      {
        label: "Nhóm ghép",
        link: "youtube.com",
        icon: IconUserPlus
      },
      {
        label: "Nhóm riêng",
        link: "google.com",
        icon: IconUsers
      },
      {
        label: "Lớp học",
        link: "fb.com",
        icon: IconUsersGroup
      },
    ],
  },
  {
    label: "Ôn tập",
    icon: IconBook,
    link: "google.com",
  },
];
