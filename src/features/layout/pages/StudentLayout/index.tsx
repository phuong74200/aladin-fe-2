import { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    const { classes, cx } = useStyles();

    const handleTabChange = (value: string) => {
        navigate(value);
    };

    const backSlash = "id" in params ? -2 : -1;
    const defaultTab = location.pathname.split("/").slice(backSlash)[0];

    const tabs = useMemo(
        () => getTabs(studentRoute.children),
        [studentRoute.children]
    );

    const detail: AuthRouteObject = props._children?.find((child) =>
        child.path.includes(defaultTab)
    );

    return (
        <AppShell
            padding="xl"
            header={<HeaderMenuColored links={navbarData}></HeaderMenuColored>}
            navbar={<NavbarNested data={navbarData} />}
            styles={appShellStyles}
        >
            <Paper shadow="md" p="md" w="100%">
                <Stack w="100%" h="100%" align="stretch">
                    <Box w="100%">
                        <SegmentedControl
                            defaultValue={defaultTab}
                            fullWidth
                            data={tabs}
                            onChange={handleTabChange}
                        />
                    </Box>
                    {props.children}
                </Stack>
            </Paper>
            <Paper
                className={cx(classes.md__half_w, classes.overflow)}
                shadow="md"
                p="lg"
            >
                {params.id ? (
                    detail.children && detail.children[0].element
                ) : (
                    <Center w="100%" h="100%">
                        <ItemNotFound p="lg" />
                    </Center>
                )}
            </Paper>
        </AppShell>
    );
}
