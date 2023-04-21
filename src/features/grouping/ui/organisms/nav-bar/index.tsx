import { useMatch, useNavigate } from "react-router-dom";
import { Button, Divider, Flex } from "@mantine/core";
import { IconUser, IconUserPlus, IconUsersGroup } from "@tabler/icons-react";

import { useStyles } from "./style";

export default function Navbar() {
  const { classes } = useStyles();

  const isMatchClassroom = useMatch("/student/class/*");
  const isMatchGrouping = useMatch("/student/grouping/*");
  const isMatchGroupCreate = useMatch("/student/create-group/*");
  const isMatchPersonal = useMatch("/student/personal/*");

  const navigate = useNavigate();

  const handleClick = (to: string) => () => {
    navigate(to);
  };

  return (
    <Flex w="100%" gap="md" align="center" justify="center">
      <Button
        fullWidth
        variant={isMatchGrouping || isMatchGroupCreate ? "filled" : "subtle"}
        onClick={handleClick("/student/grouping")}
        leftIcon={<IconUserPlus />}
      >
        Nhóm ghép
      </Button>
      <Divider orientation="vertical" className={classes.divider} />
      <Button
        fullWidth
        variant={isMatchPersonal ? "filled" : "subtle"}
        onClick={handleClick("/student/personal")}
        leftIcon={<IconUser />}
      >
        Nhóm riêng
      </Button>
      <Divider orientation="vertical" className={classes.divider} />
      <Button
        fullWidth
        variant={isMatchClassroom ? "filled" : "subtle"}
        onClick={handleClick("/student/class")}
        leftIcon={<IconUsersGroup />}
      >
        Lớp học
      </Button>
    </Flex>
  );
}
