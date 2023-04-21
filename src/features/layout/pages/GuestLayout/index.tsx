import { useLocation } from "react-router-dom";
import { AppShell, Center, Flex } from "@mantine/core";

import { LayoutProps } from "@/@types";
import { resolvedRoutes } from "@/router";
import LandingCarousel from "@/shared/components/LandingCarousel";

import { HeaderMenuColored } from "../../components/Header";
import { NavbarNested } from "../../components/NavbarNested";

import { navbarData } from "./navbarData";
import { useStyles } from "./style";

export default function GuestLayout({ children }: LayoutProps) {
  const { classes } = useStyles();

  const location = useLocation();
  const { nodeRef } = resolvedRoutes.find((route) => route.path === location.pathname) ?? {};

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
      <Center w="100%" h="100%">
        <Flex gap="xl" m={0} h={600}>
          <LandingCarousel w={900} h="auto" mih={0} />
          <Flex
            ref={nodeRef}
            h="100%"
            justify="center"
            align="center"
            w={350}
            className={classes.form}
          >
            {children}
          </Flex>
        </Flex>
      </Center>
    </AppShell>
  );
}
