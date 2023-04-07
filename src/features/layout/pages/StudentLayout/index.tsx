import { AppShell } from "@mantine/core";

import { HeaderMenuColored } from "../../components/Header";
import { NavbarNested } from "../../components/NavbarNested";

import { navbarData } from "./navbarData";
import { appShellStyles } from "./style";

import { LayoutProps } from "~/@types";

export default function StudentLayout(props: LayoutProps) {
  return (
    <AppShell
      padding="xl"
      header={<HeaderMenuColored links={navbarData}></HeaderMenuColored>}
      navbar={<NavbarNested data={navbarData} />}
      styles={appShellStyles}
    >
      {props.children}
    </AppShell>
  );
}
