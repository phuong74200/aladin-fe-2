import {
    Outlet,
    useNavigate,
    useOutlet,
    useOutletContext,
    useParams,
} from "react-router-dom";
import {
    Accordion,
    Button,
    Center,
    Paper,
    Stack,
    Table,
    Text,
} from "@mantine/core";
import dayjs from "dayjs";
import { v4 } from "uuid";

import Checkout from "../../organisms/classroom-check-out";
import ClassroomInfo from "../../organisms/classroom-info";
import PersonalAccordion from "../../organisms/classroom-personal";
import Navbar from "../../organisms/nav-bar";

import { mock } from "./mock";
import NotFound from "./not-found";
import Side from "./side";
import { accordion, useStyles } from "./style";

import ItemNotFound from "~/features/layout/components/ItemNotFound";

export default function ClassroomList() {
    const { classes, cx } = useStyles();
    const navigate = useNavigate();
    const params = useParams();
    const id = parseInt(params.id || "0", 10);

    const outlet = useOutlet();

    console.log("xxx", outlet);

    const data = mock[id];

    const handleClick = (id: number) => () => navigate(`./${id}`);

    const rows = mock.map((element, index) => (
        <tr key={v4()} onClick={handleClick(index)}>
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
