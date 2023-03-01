import { AppShell, Flex, Grid } from "@mantine/core";

import { HeaderMenuColored } from "../../components/Header";
import LandingCarousel from "../../components/LandingCarousel";
import { NavbarNested } from "../../components/NavbarNested";
import RouteTransition from "../../components/RouteTransition";

import { navbarData } from "./navbarData";
import { useStyles } from "./style";

import { LayoutProps } from "~/@types";

export default function GuestLayout({ children }: LayoutProps) {
    const { cx, classes } = useStyles();

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
                    className={classes.m_md_hidden}
                >
                    <LandingCarousel />
                </Grid.Col>
                <Grid.Col p={0} pl={12} xl={3} xs={4}>
                    <RouteTransition>
                        {(style, onAnimationEnd) => (
                            <Flex
                                justify="center"
                                align="center"
                                h="100%"
                                className={cx(style, classes.form)}
                                onAnimationEnd={onAnimationEnd}
                            >
                                {children}
                            </Flex>
                        )}
                    </RouteTransition>
                </Grid.Col>
            </Grid>
        </AppShell>
    );
}
