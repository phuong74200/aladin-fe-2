import { useNavigate, useOutlet } from "react-router-dom";
import { Paper, Stack } from "@mantine/core";
import dayjs from "dayjs";
import { v4 } from "uuid";

import ScrollTable from "../../atoms/scroll-table";
import Navbar from "../../organisms/nav-bar";
import NotFound from "../../organisms/not-found/not-found";
import { mock } from "../mock";

export default function ClassroomList() {
  const navigate = useNavigate();
  const outlet = useOutlet();

  const handleClick = (id: number) => () => navigate(`./${id}`);

  const rows = mock.map((element, index) => (
    <tr key={v4()} onClick={handleClick(index)}>
      <td>{element.group.subject}</td>
      <td>
        {element.group.subject} {element.step}
      </td>
      <td>{element.group.location}</td>
      <td>{dayjs(element.group.schedule[0]).format("DD/MM/YYYY")}</td>
      <td>{element.group.ta.name}</td>
    </tr>
  ));

  return (
    <>
      <Paper shadow="md" p="md" w="100%">
        <Stack w="100%" h="100%" spacing="lg">
          <Navbar />
          <ScrollTable>
            <thead>
              <tr>
                <th>ID</th>
                <th align="left">Tên môn học</th>
                <th>Địa điểm</th>
                <th>Thời gian</th>
                <th>Tên trợ giảng</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </ScrollTable>
        </Stack>
      </Paper>
      {outlet || <NotFound />}
    </>
  );
}
