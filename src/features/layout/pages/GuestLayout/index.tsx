import { useLocation } from "react-router-dom";
import { AppShell, Flex, Grid } from "@mantine/core";

import LandingCarousel from "../../../../shared/components/LandingCarousel";
import { HeaderMenuColored } from "../../components/Header";
import { NavbarNested } from "../../components/NavbarNested";

import { navbarData } from "./navbarData";
import { useStyles } from "./style";

import { LayoutProps } from "~/@types";
import { resolvedRoutes } from "~/router";

export default function GuestLayout({ children }: LayoutProps) {
    const { cx, classes } = useStyles();

    const location = useLocation();
    const { nodeRef } =
        resolvedRoutes.find((route) => route.path === location.pathname) ?? {};

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
            <Grid grow h="100%" gutter="xl" m={0}>
                <Grid.Col
                    h="100%"
                    p={0}
                    pr={12}
                    xl={9}
                    xs={8}
                    className={cx(classes.m_md_hidden, classes.lg_p_0)}
                >
                    <LandingCarousel />
                </Grid.Col>
                <Grid.Col
                    p={0}
                    pl={12}
                    xl={3}
                    xs={4}
                    className={classes.lg_p_0}
                >
                    <Flex
                        ref={nodeRef}
                        justify="center"
                        align="center"
                        h="100%"
                        className={classes.form}
                    >
                        {children}
                    </Flex>
                </Grid.Col>
            </Grid>
        </AppShell>
    );
}
