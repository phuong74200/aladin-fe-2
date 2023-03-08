import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Center,
    Group,
    Input,
    Pagination,
    Stack,
    Table,
    Text,
} from "@mantine/core";
import dayjs from "dayjs";

import MajorSelect from "../../components/MajorSelect";
import SubjectSelect from "../../components/SubjectSelect";
import { mock } from "../ClassDetail/mock";

import { useStyles } from "./style";

const TOTAL = Math.floor((window.innerHeight - 385) / 63);

export default function ClassList() {
    const { classes } = useStyles();
    const [activePage, setPage] = useState(1);

    const navigate = useNavigate();

    const handleClick = (id: number) => () => navigate(`./${id}`);

    const handleChange = (value: number) => {
        setPage(value);
    };

    const rows = mock
        .slice(activePage * TOTAL, activePage * TOTAL + TOTAL)
        .map((element) => (
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
        <Stack justify="space-between" h="100%">
            <Stack>
                <Group grow spacing="md" my="lg">
                    <MajorSelect />
                    <SubjectSelect />
                    <Input placeholder="Tìm kiếm môn học" />
                </Group>
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
            </Stack>
            <Center>
                <Pagination
                    page={activePage}
                    onChange={handleChange}
                    total={mock.length / TOTAL}
                />
            </Center>
        </Stack>
    );
}
