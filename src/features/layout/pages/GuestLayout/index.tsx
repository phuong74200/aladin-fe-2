import { AppShell, Flex, Grid } from "@mantine/core";

import { HeaderMenuColored } from "../../components/Header";
import LandingCarousel from "../../components/LandingCarousel";
import { NavbarNested } from "../../components/NavbarNested";

import { navbarData } from "./navbarData";

import { LayoutProps } from "~/@types";

export default function GuestLayout({ children }: LayoutProps) {
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
            <Grid grow h="100%" gutter="lg">
                <Grid.Col span={9} h="100%">
                    <LandingCarousel />
                </Grid.Col>
                <Grid.Col span={3}>
                    <Flex justify="center" align="center" h="100%">
                        {children}
                    </Flex>
                </Grid.Col>
            </Grid>
        </AppShell>
    );
}
