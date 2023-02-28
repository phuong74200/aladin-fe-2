import { AppShell, Center, SimpleGrid } from "@mantine/core";

import { HeaderMenuColored } from "../../components/Header";
import LandingCarousel from "../../components/LandingCarousel";
import { NavbarNested } from "../../components/NavbarNested";

import { navbarData } from "./navbarData";

import { LayoutProps } from "~/@types";

export default function GuestLayout({ children }: LayoutProps) {
    return (
        <AppShell
            padding="md"
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
            <SimpleGrid cols={2} mih="100%">
                <Center>
                    <LandingCarousel />
                </Center>
                <Center>{children}</Center>
            </SimpleGrid>
        </AppShell>
    );
}
