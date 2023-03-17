import { AuthRouteObject } from "~/@types";
import PrivateRoute from "~/features/authentication/components/PrivateRoute";
import ClassroomList from "~/features/grouping/pages/classroom";
import Grouping from "~/features/grouping/pages/group";
import StudentLayout from "~/features/layout/pages/StudentLayout";

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
                    element: null,
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
                },
            ],
        },
    ],
};
