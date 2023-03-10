import { AuthRouteObject } from "~/@types";
import PrivateRoute from "~/features/authentication/components/PrivateRoute";
import ClassDetail from "~/features/grouping/pages/ClassDetail";
import ClassList from "~/features/grouping/pages/ClassList";
import StudentLayout from "~/features/layout/pages/StudentLayout";

export const studentRoute: AuthRouteObject = {
    path: "/student",
    element: <PrivateRoute />,
    layout: StudentLayout,
    children: [
        {
            path: "grouping",
            element: <div>grouping profile 1</div>,
            priviliges: [],
            title: "Nhóm ghép",
        },
        {
            path: "private",
            element: <div>private profile 2</div>,
            title: "Nhóm riêng",
        },
        {
            path: "class",
            element: <ClassList />,
            priviliges: [],
            title: "Lớp học",
            child: {
                path: ":classId",
                element: <ClassDetail />,
            },
            children: [
                {
                    path: ":classId",
                    element: <ClassDetail />,
                },
            ],
        },
    ],
};
