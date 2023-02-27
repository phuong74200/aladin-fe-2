import { AppShell, Center, SimpleGrid } from "@mantine/core";

import { HeaderMenuColored } from "../../components/Header";
import LandingCarousel from "../../components/LandingCarousel";

import { LayoutProps } from "~/@types";

const links = [
    {
        label: "Học trợ giảng",
        link: "google.com",
        links: [
            {
                label: "Application Development",
                link: "youtube.com",
            },
            {
                label: "Data Analysis",
                link: "youtube.com",
            },
            {
                label: "Business Administration",
                link: "youtube.com",
            },
        ],
    },
    {
        label: "Tài liệu ôn tập",
        link: "google.com",
    },
];

export default function GuestLayout({ children }: LayoutProps) {
    return (
        <AppShell
            padding="md"
            header={<HeaderMenuColored links={links}></HeaderMenuColored>}
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
                <LandingCarousel />
                <Center>{children}</Center>
            </SimpleGrid>
        </AppShell>
    );
}
