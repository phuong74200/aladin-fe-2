import { Link, useNavigate, useOutlet, useParams } from "react-router-dom";
import { ActionIcon, Affix, Box, Collapse, Paper, Stack, Table, Text } from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import dayjs from "dayjs";
import { v4 } from "uuid";

import Navbar from "../../organisms/nav-bar";
import TimePicker from "../../organisms/time-picker";
import { mock } from "../classroom/mock";
import NotFound from "../classroom/not-found";

import { createBtn, useStyles } from "./style";

export default function Grouping() {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const params = useParams();
  const id = params.id;

  const outlet = useOutlet();

  const handleClick = (id: number) => () => navigate(`./${id}`);

  const rows = mock.map((element, index) => (
    <tr key={v4()} onClick={handleClick(index)}>
      <td>
        <Text lineClamp={1}>{element.group.subject}</Text>
      </td>
      <td>
        <Text lineClamp={1}>{`19h-22h, ${dayjs(element.group.schedule[0]).format(
          "DD/MM/YYYY"
        )}`}</Text>
      </td>
      <td width="30%">
        <Text lineClamp={1}>{element.group.location}</Text>
      </td>
      <td>
        <Text lineClamp={1}>2/10</Text>
      </td>
      <td>
        <Text lineClamp={1}>{`19h-22h, ${dayjs(element.group.schedule[0]).format(
          "DD/MM/YYYY"
        )}`}</Text>
      </td>
    </tr>
  ));

  return (
    <>
      <Paper className={classes.relative} shadow="md" p="lg" w="100%">
        <Stack w="100%" h="100%" align="stretch">
          <Navbar />
          <Box>
            <Collapse transitionDuration={500} in={id === "create"} w="100%">
              <TimePicker />
            </Collapse>
          </Box>
          <Table
            className={classes.fixed_header}
            highlightOnHover
            horizontalSpacing="xl"
            verticalSpacing="lg"
          >
            <thead>
              <tr>
                <th>ID nhóm ghép</th>
                <th>Tên môn học</th>
                <th>Số lượng buổi học</th>
                <th>Số lượng hiện có</th>
                <th>Thời gian buổi 1</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Stack>
        <Affix withinPortal={false} style={createBtn}>
          <Link to="./create">
            <ActionIcon color="blue" variant="filled" size="lg">
              <IconPlus />
            </ActionIcon>
          </Link>
        </Affix>
      </Paper>
      {outlet || <NotFound />}
    </>
  );
}
