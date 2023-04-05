import { useParams } from "react-router-dom";
import { Accordion, Button, Paper, Stack } from "@mantine/core";

import Checkout from "../../organisms/classroom-check-out";
import ClassroomInfo from "../../organisms/classroom-info";
import PersonalAccordion from "../../organisms/classroom-personal";

import { mock } from "./mock";
import { accordion, useStyles } from "./style";

export default function Side() {
    const { classes, cx } = useStyles();

    const params = useParams();
    const id = parseInt(params.id || "0", 10);

    const data = mock[id];

    return (
        <Paper
            className={cx(classes.md__half_w, classes.overflow)}
            shadow="md"
            p="lg"
        >
            <Stack>
                <Accordion
                    multiple
                    radius="xl"
                    defaultValue={["personal", "group", "check-out"]}
                    styles={accordion}
                >
                    <Accordion.Item value="personal">
                        <PersonalAccordion {...data.personnal} />
                    </Accordion.Item>
                    <Accordion.Item value="group">
                        <ClassroomInfo {...data.group} />
                    </Accordion.Item>
                    <Accordion.Item value="check-out">
                        <Checkout {...data.checkout} />
                    </Accordion.Item>
                </Accordion>
                <Button>Đăng ký ngay</Button>
            </Stack>
        </Paper>
    );
}
