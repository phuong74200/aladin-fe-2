import { Link, useNavigate, useParams } from "react-router-dom";
import {
    Accordion,
    ActionIcon,
    Affix,
    Box,
    Button,
    Center,
    Collapse,
    Paper,
    Stack,
    Table,
    Text,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import dayjs from "dayjs";
import { v4 } from "uuid";

import Checkout from "../../organisms/classroom-check-out";
import PersonalAccordion from "../../organisms/classroom-personal";
import GroupCreate from "../../organisms/group-create";
import Navbar from "../../organisms/nav-bar";
import TimePicker from "../../organisms/time-picker";
import { mock } from "../classroom/mock";

import { accordion, createBtn, useStyles } from "./style";

import ItemNotFound from "~/features/layout/components/ItemNotFound";

export default function Grouping() {
    const { classes, cx } = useStyles();
    const navigate = useNavigate();

    const params = useParams();
    const id = params.id;

    const data = mock[parseInt(id || "0", 10)];

    const handleClick = (id: number) => () => navigate(`./${id}`);

    const rows = mock.map((element, index) => (
        <tr key={v4()} onClick={handleClick(index)}>
            <td>
                <Text lineClamp={1}>{element.group.subject}</Text>
            </td>
            <td>
                <Text lineClamp={1}>{`19h-22h, ${dayjs(
                    element.group.schedule[0]
                ).format("DD/MM/YYYY")}`}</Text>
            </td>
            <td width="30%">
                <Text lineClamp={1}>{element.group.location}</Text>
            </td>
            <td>
                <Text lineClamp={1}>2/10</Text>
            </td>
            <td>
                <Text lineClamp={1}>{`19h-22h, ${dayjs(
                    element.group.schedule[0]
                ).format("DD/MM/YYYY")}`}</Text>
            </td>
        </tr>
    ));

    return (
        <>
            <Paper className={classes.relative} shadow="md" p="lg" w="100%">
                <Stack w="100%" h="100%" align="stretch">
                    <Navbar />
                    <Box>
                        <Collapse
                            transitionDuration={500}
                            in={id === "create"}
                            w="100%"
                        >
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
            <Paper
                className={cx(classes.md__half_w, classes.overflow)}
                shadow="md"
                p="lg"
            >
                {params.id ? (
                    id === "create" ? (
                        <Stack>
                            <Accordion
                                multiple
                                radius="xl"
                                defaultValue={[
                                    "personal",
                                    "group",
                                    "check-out",
                                ]}
                                styles={accordion}
                            >
                                <Accordion.Item value="personal">
                                    <PersonalAccordion
                                        email="p@gmail.com"
                                        key="123"
                                        name="ff"
                                        phone="0123456789"
                                    />
                                </Accordion.Item>
                                <Accordion.Item value="group">
                                    <GroupCreate />
                                </Accordion.Item>
                            </Accordion>
                            <Button>Đăng ký ngay</Button>
                        </Stack>
                    ) : (
                        <Stack>
                            <Accordion
                                multiple
                                radius="xl"
                                defaultValue={[
                                    "personal",
                                    "group",
                                    "check-out",
                                ]}
                                styles={accordion}
                            >
                                <Accordion.Item value="personal">
                                    <PersonalAccordion {...data.personnal} />
                                </Accordion.Item>
                                <Accordion.Item value="group">
                                    <GroupCreate {...data.group} />
                                </Accordion.Item>
                                <Accordion.Item value="check-out">
                                    <Checkout {...data.checkout} />
                                </Accordion.Item>
                            </Accordion>
                            <Button>Đăng ký ngay</Button>
                        </Stack>
                    )
                ) : (
                    <Center w="100%" h="100%">
                        <ItemNotFound p="lg" />
                    </Center>
                )}
            </Paper>
        </>
    );
}
