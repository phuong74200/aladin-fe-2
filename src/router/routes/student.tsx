import { AuthRouteObject } from "~/@types";
import PrivateRoute from "~/features/authentication/components/PrivateRoute";
import ClassroomList from "~/features/grouping/pages/classroom-list";
import ClassroomView from "~/features/grouping/pages/classroom-view";
import GroupingList from "~/features/grouping/pages/group-list";
import GroupView from "~/features/grouping/pages/group-view";
import StudentLayout from "~/features/layout/pages/StudentLayout";

export const studentRoute: AuthRouteObject = {
    path: "/student",
    element: <PrivateRoute />,
    layout: StudentLayout,
    children: [
        {
            path: "grouping",
            element: <GroupingList />,
            priviliges: [],
            title: "Nhóm ghép",
            children: [
                {
                    path: ":id",
                    element: <GroupView />,
                },
            ],
        },
        {
            path: "private",
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
                    element: <ClassroomView />,
                },
            ],
        },
    ],
};
