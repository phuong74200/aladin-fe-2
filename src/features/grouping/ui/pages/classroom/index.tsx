import { useNavigate, useOutlet } from "react-router-dom";
import { Paper, Stack } from "@mantine/core";
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
      <td>
        {element.group.subject} {element.step}
      </td>
      <td>{element.group.location}</td>
      <td>19h-22h, 23/03/2023</td>
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
                <th align="left">Môn học</th>
                <th>Địa điểm</th>
                <th>Thời gian</th>
                <th>Trợ giảng</th>
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
