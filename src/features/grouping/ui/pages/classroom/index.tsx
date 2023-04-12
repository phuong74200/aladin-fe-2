import { useNavigate, useOutlet } from "react-router-dom";
import { Paper, Stack, Table, Text } from "@mantine/core";
import dayjs from "dayjs";
import { v4 } from "uuid";

import Navbar from "../../organisms/nav-bar";

import { mock } from "./mock";
import NotFound from "./not-found";
import { useStyles } from "./style";

export default function ClassroomList() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const outlet = useOutlet();

  const handleClick = (id: number) => () => navigate(`./${id}`);

  const rows = mock.map((element, index) => (
    <tr key={v4()} onClick={handleClick(index)}>
      <td width={250}>
        <Text lineClamp={1}>{element.group.subject}</Text>
      </td>
      <td width={250}>
        <Text lineClamp={1}>{`19h-22h, ${dayjs(element.group.schedule[0]).format(
          "DD/MM/YYYY"
        )}`}</Text>
      </td>
      <td width="30%">
        <Text lineClamp={1}>{element.group.location}</Text>
      </td>
      <td>
        <Text lineClamp={1}>{element.group.ta.name}</Text>
      </td>
    </tr>
  ));

  return (
    <>
      <Paper shadow="md" p="md" w="100%">
        <Stack w="100%" h="100%" align="stretch">
          <Navbar />
          <Table
            className={classes.fixed_header}
            highlightOnHover
            horizontalSpacing="xl"
            verticalSpacing="lg"
          >
            <thead>
              <tr>
                <th>Tên môn học</th>
                <th>Thời gian</th>
                <th>Địa điểm</th>
                <th>Tên trợ giảng</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Stack>
      </Paper>
      {outlet || <NotFound />}
    </>
  );
}
