import { AppShell } from "@mantine/core";

import { LayoutProps } from "@/@types";

import { NavbarNested } from "../components/navbar-nested";
import { StudentHeader } from "../components/student-header";
import { headerData } from "../configs/student-header-data";
import { navbarData } from "../configs/student-navbar-data";

import { appShellStyles } from "./style";

export default function StudentLayout(props: LayoutProps) {
  return (
    <AppShell
      padding="xl"
      header={<StudentHeader links={headerData}></StudentHeader>}
      navbar={<NavbarNested data={navbarData} />}
      styles={appShellStyles}
    >
      {props.children}
    </AppShell>
  );
}
