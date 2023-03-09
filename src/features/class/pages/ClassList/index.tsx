import { useNavigate } from "react-router-dom";
import { Box, Group, Input, Table, Text } from "@mantine/core";
import dayjs from "dayjs";

import MajorSelect from "../../components/MajorSelect";
import SubjectSelect from "../../components/SubjectSelect";
import { mock } from "../ClassDetail/mock";

import { useStyles } from "./style";

export default function ClassList() {
    const { classes } = useStyles();
    const navigate = useNavigate();

    const handleClick = (id: number) => () => navigate(`./${id}`);

    const rows = mock.map((element) => (
        <tr key={element.id} onClick={handleClick(element.id)}>
            <td width={250}>
                <Text lineClamp={1}>{element.subject}</Text>
            </td>
            <td width={250}>
                <Text lineClamp={1}>{`19h-22h, ${dayjs(element.time).format(
                    "DD/MM/YYYY"
                )}`}</Text>
            </td>
            <td width="30%">
                <Text lineClamp={1}>{element.location}</Text>
            </td>
            <td>
                <Text lineClamp={1}>{element.ta}</Text>
            </td>
        </tr>
    ));

    return (
        <>
            <Group grow spacing="lg">
                <MajorSelect />
                <SubjectSelect />
                <Input placeholder="Tìm kiếm môn học" />
            </Group>
            <Box className={classes.fullHeightOverflow}>
                <Table
                    className={classes.fixed}
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
            </Box>
        </>
    );
}
