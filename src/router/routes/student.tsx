import { AuthRouteObject } from "@/@types";
import PrivateRoute from "@/features/authentication/components/PrivateRoute";
import ClassroomList from "@/features/grouping/ui/pages/classroom";
import ClassDetail from "@/features/grouping/ui/pages/classroom/class-detail";
import Grouping from "@/features/grouping/ui/pages/group";
import GroupDetail from "@/features/grouping/ui/pages/group/group-detail";
import GroupCreate from "@/features/grouping/ui/pages/group-create";
import GroupCreateDetail from "@/features/grouping/ui/pages/group-create/group-detail";
import Personal from "@/features/grouping/ui/pages/personal";
import Map from "@/features/grouping/ui/pages/personal/map";
import TimePick from "@/features/grouping/ui/pages/personal/time-pick";
import StudentLayout from "@/features/layout/pages/StudentLayout";

export const studentRoute: AuthRouteObject = {
  path: "/student",
  element: <PrivateRoute />,
  layout: StudentLayout,
  children: [
    {
      path: "grouping",
      element: <Grouping />,
      priviliges: [],
      title: "Nhóm ghép",
      children: [
        {
          path: ":id",
          element: <GroupDetail />,
        },
      ],
    },
    {
      path: "create-group",
      element: <GroupCreate />,
      priviliges: [],
      title: "Nhóm ghép",
      children: [
        {
          path: ":id",
          element: <GroupCreateDetail />,
        },
      ],
    },
    {
      path: "personal",
      element: <Personal />,
      title: "Nhóm riêng",
      children: [
        {
          path: "map",
          element: <Map />,
        },
        {
          path: "time-pick",
          element: <TimePick />,
        },
      ],
    },
    {
      path: "class",
      element: <ClassroomList />,
      priviliges: [],
      title: "Lớp học",
      children: [
        {
          path: ":id",
          element: <ClassDetail />,
        },
      ],
    },
  ],
};
