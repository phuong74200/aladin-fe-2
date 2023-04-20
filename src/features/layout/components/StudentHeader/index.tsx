import { useNavigate } from "react-router-dom";
import {
  ActionIcon,
  Avatar,
  Box,
  Burger,
  Center,
  Container,
  Group,
  Header,
  Indicator,
  Menu,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { IconArrowBarToRight, IconBell } from "@tabler/icons-react";

import AladinLogo from "@/shared/components/AladinLogo";

import { useNavbarStore } from "../../store/navbarStore";

import { useStyles } from "./style";

interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
    icon: React.ElementType;
  }[];
}

export function StudentHeader({ links }: HeaderSearchProps) {
  const navbarState = useNavbarStore();
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const navigate = useNavigate();

  const handleClick = () => navbarState.setOpen(!navbarState.isOpen);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }}>
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center inline>
                <link.icon size={16} color={theme.fn.primaryColor()} />
                <Box component="span" ml={8}>
                  {link.label}
                </Box>
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
        <Center inline>
          <link.icon size={16} color={theme.fn.primaryColor()} />
          <Box component="span" ml={8}>
            {link.label}
          </Box>
        </Center>
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
          <Group>
            <Group spacing={5} className={classes.links}>
              {items}
            </Group>
            <UnstyledButton>
              <Group>
                <Indicator inline label="29" size={16} color="red">
                  <ActionIcon size={40} radius="lg" color="blue">
                    <IconBell />
                  </ActionIcon>
                </Indicator>
                <Avatar size={40} radius="lg" color="blue">
                  BH
                </Avatar>
                <div>
                  <Text weight="bold" transform="uppercase">
                    Nguyễn Văn A
                  </Text>
                  <Text size="xs" color="red">
                    Trở thành trợ giảng ngay!
                  </Text>
                </div>
              </Group>
            </UnstyledButton>
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
