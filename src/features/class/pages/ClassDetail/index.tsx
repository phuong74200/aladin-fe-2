import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Accordion, Button, Stack, useMantineTheme } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDebouncedValue } from "@mantine/hooks";
import { IconCreditCard, IconId, IconSchool } from "@tabler/icons";
import dayjs from "dayjs";

import CouponInput from "../../components/CouponInput";
import DetailGroup from "../../components/DetailGroup";
import StudentInput from "../../components/StudentInput";

import { couponMock, mock } from "./mock";

export default function ClassDetail() {
    const theme = useMantineTheme();
    const getColor = (color: string) =>
        theme.colors[color][theme.colorScheme === "dark" ? 5 : 7];
    const params = useParams();
    const classId = parseInt(params.classId || "0", 10);

    const form = useForm({
        initialValues: {
            coupon: "",
            students: 0,
        },
    });

    const [debounced] = useDebouncedValue(form.values.coupon, 200);

    const data = mock[classId];
    console.log(couponMock);

    useEffect(() => {
        if (!couponMock.get(debounced) && debounced.length > 0) {
            form.setErrors({ coupon: "Mã không tồn tại" });
            console.log("errrrrrrrr");
        }
    }, [debounced]);

    const saleOff = couponMock.get(debounced) || 0;

    return (
        <Stack>
            <Accordion
                multiple
                radius="xl"
                defaultValue={["personal", "class", "cash"]}
            >
                <Accordion.Item value="personal">
                    <Accordion.Control
                        icon={<IconId color={getColor("red")} />}
                    >
                        Thông tin cá nhân
                    </Accordion.Control>
                    <Accordion.Panel>
                        <Stack>
                            <DetailGroup label="Họ và tên" value={data.name} />
                            <DetailGroup
                                label="Số điện thoại"
                                value={data.phoneNumber}
                            />
                            <DetailGroup label="Email" value={data.email} />
                        </Stack>
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="class">
                    <Accordion.Control
                        icon={<IconSchool color={getColor("green")} />}
                    >
                        Thông tin lớp học
                    </Accordion.Control>
                    <Accordion.Panel>
                        <Stack>
                            <StudentInput {...form.getInputProps("students")} />
                            <DetailGroup label="Môn học" value={data.subject} />
                            <DetailGroup
                                label="Nội dung"
                                value={data.description}
                            />
                            <DetailGroup
                                label="Thời gian"
                                value={`19h-22h, ${dayjs(data.time).format(
                                    "DD/MM/YYYY"
                                )}`}
                            />
                            <DetailGroup
                                label="Địa điểm"
                                value={data.location}
                            />
                        </Stack>
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="cash">
                    <Accordion.Control
                        icon={<IconCreditCard color={getColor("blue")} />}
                    >
                        Thông tin thanh toán
                    </Accordion.Control>
                    <Accordion.Panel>
                        <Stack>
                            <CouponInput {...form.getInputProps("coupon")} />
                            <DetailGroup
                                label="Tạm tính"
                                value={data.price.toLocaleString("en-US")}
                                last={<small> VND</small>}
                            />
                            <DetailGroup
                                label="Giảm giá"
                                value={saleOff?.toLocaleString("en-US")}
                                last={<small> VND</small>}
                            />
                            <DetailGroup
                                label="Tổng tiền"
                                value={(data.price - saleOff).toLocaleString(
                                    "en-US"
                                )}
                                last={<small> VND</small>}
                            />
                        </Stack>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
            <Button>Đăng ký ngay</Button>
        </Stack>
    );
}
