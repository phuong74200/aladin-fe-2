import { Link, useNavigate } from "react-router-dom";
import {
  ActionIcon,
  Avatar,
  Box,
  Burger,
  Button,
  Center,
  Container,
  Group,
  Header,
  Indicator,
  Menu,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { IconArrowBarToRight, IconBell } from "@tabler/icons-react";

import AladinLogo from "@/shared/components/AladinLogo";

import { useStyles } from "./style";

interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string; icon?: React.ElementType }[];
    icon?: React.ElementType;
  }[];
}

export function StudentHeader({ links }: HeaderSearchProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  const navigate = useNavigate();

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
                style={{ fontSize: 17 }}
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
          style={{ fontSize: 17 }}
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
      <Container fluid px="md">
        <div className={classes.inner}>
          <Box className={classes.md_hide}>
            <AladinLogo size={32} />
          </Box>
          <Group>
            <Group spacing={5} className={classes.links}>
              {items}
            </Group>
            <UnstyledButton>
              <Group spacing="xl">
                <Indicator inline label="29" size={16} color="red">
                  <ActionIcon size={40} radius="lg" color="blue">
                    <IconBell />
                  </ActionIcon>
                </Indicator>
                <Avatar size={40} radius="lg" color="blue">
                  BH
                </Avatar>
              </Group>
            </UnstyledButton>
          </Group>
          <Burger opened={true} className={classes.burger} size="sm" />
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
