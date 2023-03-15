import {
    Accordion,
    Divider,
    Stack,
    Text as MantineText,
    useMantineTheme,
} from "@mantine/core";
import dayjs from "dayjs";

import NumberInput from "../../molecules/number-input";
import SpoilerGroup from "../../molecules/spoiler";
import Text from "../../molecules/text";

export interface GroupAccordionProps {
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

export default function GroupAccordion({
    subject,
    students,
    lessons,
    duration,
    description,
    location,
    schedule,
    ta,
}: GroupAccordionProps) {
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
                    {subject ? (
                        <Text label="Môn đăng ký" value={subject} />
                    ) : null}
                    {typeof students === "number" ? (
                        <NumberInput
                            label="Số lượng sinh viên"
                            placeholder="Số lượng sinh viên"
                        />
                    ) : null}
                    {lessons ? (
                        <Text label="Số lượng buổi học" value={lessons} />
                    ) : null}
                    {duration ? (
                        <Text label="Thời lượng buổi học" value={duration} />
                    ) : null}
                    {location ? (
                        <Text label="Địa điểm" value={location} />
                    ) : null}
                    {schedule?.map((time, index) => (
                        <Text
                            key={time.getTime()}
                            label={`Thời gian buổi ${index + 1}`}
                            value={dayjs(time).format("DD/MM/YYYY")}
                        />
                    ))}
                    {description ? (
                        <SpoilerGroup
                            label="Nội dung buổi học"
                            value={description}
                        />
                    ) : null}
                    {ta?.name ? (
                        <Text label="Tên TA phụ trách" value={ta.name} />
                    ) : null}
                </Stack>
            </Accordion.Panel>
        </>
    );
}
