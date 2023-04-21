import { IconBook, IconSchool, IconUserPlus, IconUsers, IconUsersGroup } from "@tabler/icons-react";

export const navbarData = [
  {
    label: "Học trợ giảng",
    initiallyOpened: true,
    icon: IconSchool,
    link: "google.com",
    links: [
      {
        label: "Nhóm ghép",
        link: "/student/grouping",
        icon: IconUserPlus,
      },
      {
        label: "Nhóm riêng",
        link: "/student/personal",
        icon: IconUsers,
      },
      {
        label: "Lớp học",
        link: "/student/class",
        icon: IconUsersGroup,
      },
    ],
  },
  {
    label: "Ôn tập",
    icon: IconBook,
    link: "google.com",
  },
];
