import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDebouncedValue } from "@mantine/hooks";

import OrderDetail from "../../ui/templates/OrderDetail";

import { couponMock, mock } from "./mock";

import SubscribeComfirm from "~/features/grouping/components/SubscribeComfirm";

export default function ClassDetail() {
    const [isOpen, setOpen] = useState(true);
    const params = useParams();
    const classId = parseInt(params.classId || "0", 10);

    const data = mock[classId];

    const form = useForm({
        initialValues: {
            coupon: "",
            students: 0,
        },
    });

    const [debounced] = useDebouncedValue(form.values.coupon, 200);

    useEffect(() => {
        if (!couponMock.get(debounced) && debounced.length > 0) {
            form.setErrors({ coupon: "Mã không tồn tại" });
            console.log("errrrrrrrr");
        }
    }, [debounced]);

    const handleClick = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <SubscribeComfirm open={isOpen} disabled onClose={handleClose} />
            <Stack>
                <OrderDetail {...data} />
                <Button onClick={handleClick}>Đăng ký ngay</Button>
            </Stack>
        </>
    );
}
