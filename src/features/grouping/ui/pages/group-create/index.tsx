import { Link, useNavigate, useOutlet } from "react-router-dom";
import { Affix, Button, Paper, Stack } from "@mantine/core";
import dayjs from "dayjs";
import { v4 } from "uuid";

import ScrollTable from "../../atoms/scroll-table";
import Navbar from "../../organisms/nav-bar";
import NotFound from "../../organisms/not-found/not-found";
import TimePicker from "../../organisms/time-picker";
import { mock } from "../mock";

import { createBtn } from "./style";

export default function GroupCreate() {
  const navigate = useNavigate();

  const outlet = useOutlet();

  const handleClick = (id: number) => () => navigate(`./${id}`);

  const rows = mock.map((element, index) => (
    <tr key={v4()} onClick={handleClick(index)}>
      <td>{element.group.subject}</td>
      <td>2</td>
      <td>{`19h-22h, ${dayjs(element.group.schedule[0]).format("DD/MM/YYYY")}`}</td>
      <td>2/10</td>
      <td>{element.group.description}</td>
    </tr>
  ));

  return (
    <>
      <Paper pos="relative" shadow="md" p="md" w="100%">
        <Stack w="100%" h="100%" spacing="lg">
          <Navbar />
          <TimePicker />
          <ScrollTable>
            <thead>
              <tr>
                <th>Tên môn học chờ ghép</th>
                <th>Số lượng buổi học</th>
                <th>Thời lượng buổi học</th>
                <th>Số lượng hiện có</th>
                <th>Nội dung buổi học</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </ScrollTable>
        </Stack>
        <Affix withinPortal={false} style={createBtn}>
          <Link to="/student/grouping">
            <Button>Quay lại</Button>
          </Link>
        </Affix>
      </Paper>
      {outlet || <NotFound />}
    </>
  );
}
