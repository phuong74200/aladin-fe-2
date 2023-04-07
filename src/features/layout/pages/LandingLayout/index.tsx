import { AppShell } from "@mantine/core";

import { HeaderMenuColored } from "../../components/Header";
import { NavbarNested } from "../../components/NavbarNested";

import { navbarData } from "./navbarData";

import { LayoutProps } from "~/@types";

export default function LandingLayout({ children }: LayoutProps) {
  return (
    <AppShell
      padding={0}
      header={<HeaderMenuColored links={navbarData}></HeaderMenuColored>}
      navbar={<NavbarNested data={navbarData} />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
}
