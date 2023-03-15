import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Accordion, Button, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDebouncedValue } from "@mantine/hooks";

import Checkout from "../../organisms/classroom-check-out";
import GroupAccordion from "../../organisms/classroom-info";
import PersonalAccordion from "../../organisms/classroom-personal";

import { couponMock, mock } from "./mock";
import { accordion } from "./style";

export default function ClassroomView() {
    const [isOpen, setOpen] = useState(false);
    const params = useParams();
    const id = parseInt(params.id || "0", 10);

    const data = mock[id];

    const form = useForm({
        initialValues: {
            coupon: "",
            students: 0,
        },
    });

    const [debounced] = useDebouncedValue(form.values.coupon, 200);

    useEffect(() => {
        if (!couponMock.get(debounced) && debounced.length > 0)
            form.setErrors({ coupon: "Mã không tồn tại" });
    }, [debounced]);

    const handleClick = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
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
                        <GroupAccordion {...data.group} />
                    </Accordion.Item>
                    <Accordion.Item value="check-out">
                        <Checkout {...data.checkout} />
                    </Accordion.Item>
                </Accordion>
                <Button onClick={handleClick}>Đăng ký ngay</Button>
            </Stack>
        </>
    );
}
