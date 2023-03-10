import { useEffect, useState } from "react";
import { Button, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDebouncedValue } from "@mantine/hooks";

import { couponMock } from "./mock";

import ClassInfo from "~/features/grouping/components/ClassInfo";
import SubscribeComfirm from "~/features/grouping/components/SubscribeComfirm";

export default function ClassDetail() {
    const [isOpen, setOpen] = useState(true);

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
                <ClassInfo disabled={false} />
                <Button onClick={handleClick}>Đăng ký ngay</Button>
            </Stack>
        </>
    );
}
