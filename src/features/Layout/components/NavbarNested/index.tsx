import { Navbar, ScrollArea, Transition } from "@mantine/core";
import { TablerIcon } from "@tabler/icons";

import { useNavbarStore } from "../../store/navbarStore";
import { LinksGroup } from "../NavbarLinksGroup";
import { UserButton } from "../UserButton";

import { useStyles } from "./style";

export interface NavbarNestedProps {
    data: {
        label: string;
        icon: TablerIcon;
        initiallyOpened?: boolean;
        links?: { label: string; link: string }[];
    }[];
}

export function NavbarNested({ data }: NavbarNestedProps) {
    const { classes } = useStyles();
    const links = data.map((item) => <LinksGroup {...item} key={item.label} />);
    const navbarState = useNavbarStore();

    return (
        <Transition
            mounted={navbarState.isOpen}
            transition="pop-top-right"
            duration={400}
            timingFunction="ease"
        >
            {(styles) => (
                <Navbar
                    width={{ sm: 300 }}
                    p="md"
                    className={classes.navbar}
                    style={styles}
                >
                    <Navbar.Section
                        grow
                        className={classes.links}
                        component={ScrollArea}
                    >
                        <div className={classes.linksInner}>{links}</div>
                    </Navbar.Section>

                    <Navbar.Section className={classes.footer}>
                        <UserButton
                            image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                            name="Thanh Phuong"
                            email="phuong72400@yahoo.com"
                        />
                    </Navbar.Section>
                </Navbar>
            )}
        </Transition>
    );
}
