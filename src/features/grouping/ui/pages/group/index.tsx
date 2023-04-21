import { Link, useNavigate, useOutlet } from "react-router-dom";
import { ActionIcon, Affix, Paper, Stack } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import dayjs from "dayjs";
import { v4 } from "uuid";

import ScrollTable from "../../atoms/scroll-table";
import Navbar from "../../organisms/nav-bar";
import NotFound from "../../organisms/not-found/not-found";
import { mock } from "../mock";

import { createBtn } from "./style";

export default function Grouping() {
  const navigate = useNavigate();

  const outlet = useOutlet();

  const handleClick = (id: number) => () => navigate(`./${id}`);

  const rows = mock.map((element, index) => (
    <tr key={v4()} onClick={handleClick(index)}>
      <td>{element.group.id}</td>
      <td>{element.group.subject}</td>
      <td style={{ textAlign: "center" }}>{element.group.students}</td>
      <td>{element.group.location}</td>
      <td>2/10</td>
      <td>{dayjs(element.group.schedule[0]).format("DD/MM/YYYY")}</td>
    </tr>
  ));

  return (
    <>
      <Paper pos="relative" shadow="md" p="md" w="100%">
        <Stack w="100%" h="100%" spacing="lg">
          <Navbar />
          {/* <Box>
            <Collapse transitionDuration={500} in={id === "create"} w="100%">
              <TimePicker />
            </Collapse>
          </Box> */}
          <ScrollTable>
            <thead>
              <tr>
                <th>ID</th>
                <th>Môn học</th>
                <th>Số lượng buổi học</th>
                <th>Địa điểm</th>
                <th>Số lượng hiện có</th>
                <th>Thời gian buổi 1</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </ScrollTable>
        </Stack>
        <Affix withinPortal={false} style={createBtn}>
          <Link to="/student/create-group">
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
