import { AuthRouteObject } from "@/@types";
import PrivateRoute from "@/features/authentication/components/PrivateRoute";
import ClassroomList from "@/features/grouping/ui/pages/classroom";
import ClassDetail from "@/features/grouping/ui/pages/classroom/class-detail";
import Grouping from "@/features/grouping/ui/pages/group";
import GroupDetail from "@/features/grouping/ui/pages/group/group-detail";
import GroupCreate from "@/features/grouping/ui/pages/group-create";
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
          element: <GroupDetail />,
        },
      ],
    },
    {
      path: "personal",
      element: <div>private profile 2</div>,
      title: "Nhóm riêng",
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
