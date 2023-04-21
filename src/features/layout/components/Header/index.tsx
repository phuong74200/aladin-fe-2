import { Link, useNavigate } from "react-router-dom";
import {
  ActionIcon,
  Box,
  Burger,
  Button,
  Center,
  Container,
  Group,
  Header,
  Menu,
  useMantineTheme,
} from "@mantine/core";
import { IconArrowBarToRight } from "@tabler/icons-react";

import AladinLogo from "@/shared/components/AladinLogo";

import { useNavbarStore } from "../../store/navbarStore";

import { useStyles } from "./style";

interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string; icon?: React.ElementType }[];
    icon?: React.ElementType;
  }[];
}

export function HeaderMenuColored({ links }: HeaderSearchProps) {
  const navbarState = useNavbarStore();
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const navigate = useNavigate();

  const handleClick = () => navbarState.setOpen(!navbarState.isOpen);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link} color={theme.primaryColor}>
        <Link to={item.link} className={classes.defaultLink}>
          <Center inline>
            {item?.icon && <item.icon size={16} color={theme.fn.primaryColor()} />}
            <Box component="span" ml={8}>
              {item.label}
            </Box>
          </Center>
        </Link>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }}>
          <Menu.Target>
            <Link to={link.link}>
              <Button
                variant="subtle"
                leftIcon={link?.icon && <link.icon size={24} color={theme.fn.primaryColor()} />}
              >
                {link.label}
              </Button>
            </Link>
          </Menu.Target>
          <Menu.Dropdown p="sm">{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.label} to={link.link}>
        <Button
          variant="subtle"
          leftIcon={link?.icon && <link.icon size={24} color={theme.fn.primaryColor()} />}
        >
          {link.label}
        </Button>
      </Link>
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
          <ActionIcon onClick={handleClickLogin} className={classes.md_show}>
            <IconArrowBarToRight size={24} />
          </ActionIcon>
        </div>
      </Container>
    </Header>
  );
}
