import { Button, Navbar, ScrollArea, Transition } from "@mantine/core";
import { IconPin } from "@tabler/icons-react";

import { LinksGroup } from "../links-group";

import { useStyles } from "./style";

export interface NavbarNestedProps {
  data: {
    label: string;
    icon?: React.ElementType;
    initiallyOpened?: boolean;
    links?: { label: string; link: string }[];
  }[];
}

export function NavbarNested({ data }: NavbarNestedProps) {
  const { classes } = useStyles();
  const links = data.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Transition mounted={true} transition="pop-top-right" duration={400} timingFunction="ease">
      {(styles) => (
        <Navbar width={{ sm: 300 }} p="md" className={classes.navbar} style={styles}>
          <Navbar.Section grow className={classes.links} component={ScrollArea}>
            <div>{links}</div>
          </Navbar.Section>

          <Navbar.Section>
            <Button fullWidth radius="sm" variant="light">
              <IconPin />
            </Button>
          </Navbar.Section>
        </Navbar>
      )}
    </Transition>
  );
}
