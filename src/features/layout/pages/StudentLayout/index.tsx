import { AppShell } from "@mantine/core";

import { LayoutProps } from "@/@types";

import { NavbarNested } from "../../components/NavbarNested";
import { StudentHeader } from "../../components/StudentHeader";

import { navbarData } from "./navbarData";
import { appShellStyles } from "./style";

export default function StudentLayout(props: LayoutProps) {
  return (
    <AppShell
      padding="xl"
      header={<StudentHeader links={navbarData}></StudentHeader>}
      navbar={<NavbarNested data={navbarData} />}
      styles={appShellStyles}
    >
      {props.children}
    </AppShell>
  );
}
