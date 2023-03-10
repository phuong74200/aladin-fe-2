import { useNavigate } from "react-router-dom";
import { Group, Input, Table, Text } from "@mantine/core";
import dayjs from "dayjs";

import MajorSelect from "../../components/MajorSelect";
import SubjectSelect from "../../components/SubjectSelect";
import { mock } from "../ClassDetail/mock";

import { useStyles } from "./style";

export default function ClassList() {
    const { classes } = useStyles();
    const navigate = useNavigate();

    const handleClick = (id: number) => () => navigate(`./${id}`);

    const rows = mock.map((element, index) => (
        <tr key={index} onClick={handleClick(index)}>
            <td width={250}>
                <Text lineClamp={1}>{element.group.subject}</Text>
            </td>
            <td width={250}>
                <Text lineClamp={1}>{`19h-22h, ${dayjs(
                    element.group.schedule[0]
                ).format("DD/MM/YYYY")}`}</Text>
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
            <Group grow spacing="lg">
                <MajorSelect />
                <SubjectSelect />
                <Input placeholder="Tìm kiếm môn học" />
            </Group>
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
        </>
    );
}
