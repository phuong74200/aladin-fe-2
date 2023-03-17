import {
    Accordion,
    Divider,
    Stack,
    Text as MantineText,
    useMantineTheme,
} from "@mantine/core";
import dayjs from "dayjs";

import NumberInput from "../../molecules/number-input";
import Radios from "../../molecules/radios";
import Select from "../../molecules/select";
import SpoilerGroup from "../../molecules/spoiler";
import Text from "../../molecules/text";

export interface GroupInfoProps {
    subject?: string;
    students?: number;
    lessons?: number;
    duration?: number;
    description?: string;
    location?: string;
    schedule?: Date[];
    ta?: {
        name?: string;
    };
}

export default function GroupCreate({
    subject,
    students,
    lessons,
    duration,
    description,
    location,
    schedule,
    ta,
}: GroupInfoProps) {
    const theme = useMantineTheme();

    return (
        <>
            <Accordion.Control>
                <Divider
                    label={
                        <MantineText
                            color={theme.primaryColor}
                            weight="bold"
                            size="md"
                        >
                            Thông tin nhóm
                        </MantineText>
                    }
                />
            </Accordion.Control>
            <Accordion.Panel>
                <Stack>
                    <Select
                        data={[]}
                        placeholder="Môn đăng ký"
                        label="Chọn môn học"
                        value={subject}
                    />
                    <NumberInput
                        label="Số lượng sinh viên"
                        placeholder="Nhập số lượng sinh viên"
                        value={undefined}
                    />
                    <NumberInput
                        label="Số lượng buổi học"
                        placeholder="Số lượng buổi học"
                        value={undefined}
                    />
                    <Radios
                        label="Thời lượng buổi học"
                        data={[
                            {
                                label: "2 giờ",
                                value: "2",
                            },
                            {
                                label: "3 giờ",
                                value: "3",
                            },
                            {
                                label: "4 giờ",
                                value: "4",
                            },
                        ]}
                    />
                    <Select
                        data={[]}
                        placeholder="Chọn nội dung cần giảng dạy"
                        label="Nội dung buổi học"
                        value={subject}
                    />
                </Stack>
            </Accordion.Panel>
        </>
    );
}
