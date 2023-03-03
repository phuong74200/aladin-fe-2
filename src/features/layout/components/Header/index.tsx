import { useNavigate } from "react-router-dom";
import {
    ActionIcon,
    Box,
    Burger,
    Center,
    Container,
    Group,
    Header,
    Menu,
} from "@mantine/core";
import { IconArrowBarToRight } from "@tabler/icons";

import { useNavbarStore } from "../../store/navbarStore";

import { useStyles } from "./style";

import AladinLogo from "~/shared/components/AladinLogo";

interface HeaderSearchProps {
    links: {
        link: string;
        label: string;
        links?: { link: string; label: string }[];
    }[];
}

export function HeaderMenuColored({ links }: HeaderSearchProps) {
    const navbarState = useNavbarStore();
    const { classes } = useStyles();

    const navigate = useNavigate();

    const handleClick = () => navbarState.setOpen(!navbarState.isOpen);

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
            <Menu.Item key={item.link}>{item.label}</Menu.Item>
        ));

        if (menuItems) {
            return (
                <Menu
                    key={link.label}
                    trigger="hover"
                    exitTransitionDuration={0}
                >
                    <Menu.Target>
                        <a
                            href={link.link}
                            className={classes.link}
                            onClick={(event) => event.preventDefault()}
                        >
                            <Center>
                                <span className={classes.linkLabel}>
                                    {link.label}
                                </span>
                                {/* <IconChevronDown size={12} stroke={1.5} /> */}
                            </Center>
                        </a>
                    </Menu.Target>
                    <Menu.Dropdown>{menuItems}</Menu.Dropdown>
                </Menu>
            );
        }

        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </a>
        );
    });

    const handleClickLogin = () => {
        navigate("/login");
    };

    return (
        <Header height={64} mb={120}>
            <Container fluid px="xl">
                <div className={classes.inner}>
                    <Box className={classes.md_hide}>
                        <AladinLogo size={32} />
                    </Box>
                    <Group spacing={5} className={classes.links}>
                        {items}
                    </Group>
                    <Burger
                        opened={navbarState.isOpen}
                        onClick={handleClick}
                        className={classes.burger}
                        size="sm"
                    />
                    <Box className={classes.md_show}>
                        <AladinLogo size={32} />
                    </Box>
                    <ActionIcon
                        onClick={handleClickLogin}
                        className={classes.md_show}
                    >
                        <IconArrowBarToRight size={24} />
                    </ActionIcon>
                </div>
            </Container>
        </Header>
    );
}
