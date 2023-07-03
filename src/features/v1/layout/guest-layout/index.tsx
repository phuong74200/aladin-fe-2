import { AppShell, Box, Flex } from "@mantine/core";

import { LayoutProps } from "@/@types";
import LandingCarousel from "@/shared/components/LandingCarousel";

import { HeaderMenuColored } from "../components/header";
import { NavbarNested } from "../components/navbar-nested";
import { navbarData } from "../configs/all-navbar-data";

import { useStyles } from "./style";

export default function GuestLayout({ children }: LayoutProps) {
  const { classes } = useStyles();

  return (
    <AppShell
      padding="xl"
      header={<HeaderMenuColored links={navbarData}></HeaderMenuColored>}
      navbar={<NavbarNested data={navbarData} />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      <Flex p="lg" h="100%">
        <Box w="50%">
          <LandingCarousel w="auto" h="100%" mih={0} />
        </Box>
        <Flex h="100%" justify="center" align="center" w="50%" className={classes.form}>
          {children}
        </Flex>
      </Flex>
    </AppShell>
  );
}
