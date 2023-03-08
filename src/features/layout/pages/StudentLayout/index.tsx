import { useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AppShell, Center, Flex, Group, Paper, Tabs } from "@mantine/core";
import { IconSettings } from "@tabler/icons";
import { v4 as uuidv4 } from "uuid";

import { HeaderMenuColored } from "../../components/Header";
import ItemNotFound from "../../components/ItemNotFound";
import { NavbarNested } from "../../components/NavbarNested";

import { navbarData } from "./navbarData";
import { useStyles } from "./style";

import { AuthRouteObject, LayoutProps } from "~/@types";
import ClassDetail from "~/features/class/pages/ClassDetail";
import { studentRoute } from "~/router/routes/student";

const getTabs = (children?: AuthRouteObject[]) => {
    return (children || []).map((child) => ({
        key: child.path || uuidv4(),
        value: child.path || uuidv4(),
        title: child.title,
    }));
};

export default function StudentLayout({ children }: LayoutProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();
    const { classes } = useStyles();

    const handleTabChange = (value: string) => {
        navigate(value);
    };

    const backSlash = "classId" in params ? -2 : -1;
    const defaultTab = location.pathname.split("/").slice(backSlash)[0];

    const tabs = useMemo(
        () => getTabs(studentRoute.children),
        [studentRoute.children]
    );

    return (
        <AppShell
            padding="xl"
            header={<HeaderMenuColored links={navbarData}></HeaderMenuColored>}
            navbar={<NavbarNested data={navbarData} />}
            styles={(theme) => ({
                main: {
                    backgroundColor:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            })}
        >
            <Flex h="100%" gap="lg">
                <Paper w="100%" shadow="md" p="lg">
                    <Flex w="100%" h="100%">
                        <Tabs
                            className={classes.stack}
                            w="100%"
                            onTabChange={handleTabChange}
                            variant="pills"
                            defaultValue={defaultTab}
                        >
                            <Tabs.List>
                                <Group w="100%" grow>
                                    {tabs.map((route) => (
                                        <Tabs.Tab
                                            key={route.key}
                                            value={route.value}
                                            icon={
                                                <IconSettings size="0.8rem" />
                                            }
                                            w="100%"
                                        >
                                            {route.title}
                                        </Tabs.Tab>
                                    ))}
                                </Group>
                            </Tabs.List>
                            {tabs.map((route) => (
                                <Tabs.Panel
                                    h="100%"
                                    key={route.key}
                                    value={route.value}
                                >
                                    {children}
                                </Tabs.Panel>
                            ))}
                        </Tabs>
                    </Flex>
                </Paper>
                <Paper
                    h="100%"
                    className={classes.md__half_w}
                    shadow="md"
                    p="lg"
                >
                    {params.classId ? (
                        <ClassDetail />
                    ) : (
                        <Center w="100%" h="100%">
                            <ItemNotFound p="lg" />
                        </Center>
                    )}
                </Paper>
            </Flex>
        </AppShell>
    );
}
