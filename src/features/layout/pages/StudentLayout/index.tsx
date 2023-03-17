import { useMemo } from "react";
import {
    matchRoutes,
    renderMatches,
    useLocation,
    useMatch,
    useMatches,
    useNavigate,
    useOutlet,
    useParams,
    useResolvedPath,
    useRoutes,
} from "react-router-dom";
import {
    AppShell,
    Box,
    Center,
    Paper,
    SegmentedControl,
    Stack,
} from "@mantine/core";
import { v4 as uuidv4 } from "uuid";

import { HeaderMenuColored } from "../../components/Header";
import ItemNotFound from "../../components/ItemNotFound";
import { NavbarNested } from "../../components/NavbarNested";

import { navbarData } from "./navbarData";
import { appShellStyles, useStyles } from "./style";

import { AuthRouteObject, LayoutProps } from "~/@types";
import { resolvedRoutes } from "~/router";
import { studentRoute } from "~/router/routes/student";

const getTabs = (children?: AuthRouteObject[]) => {
    return (children || []).map((child) => ({
        key: child.path || uuidv4(),
        value: child.path || uuidv4(),
        title: child.title,
        label: child.title,
    }));
};

export default function StudentLayout(props: LayoutProps) {
    const { classes, cx } = useStyles();

    return (
        <AppShell
            padding="xl"
            header={<HeaderMenuColored links={navbarData}></HeaderMenuColored>}
            navbar={<NavbarNested data={navbarData} />}
            styles={appShellStyles}
        >
            {props.children}
        </AppShell>
    );
}
