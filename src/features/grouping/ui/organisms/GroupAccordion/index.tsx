import {
    Accordion,
    Divider,
    Stack,
    Text,
    useMantineTheme,
} from "@mantine/core";
import dayjs from "dayjs";

import InfoGroup from "../../molecules/InfoGroup";
import SpoilerGroup from "../../molecules/SpoilerGroup";
import StudentInputGroup from "../../molecules/StudentInputGroup";

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
                        <Text
                            color={theme.primaryColor}
                            weight="bold"
                            size="md"
                        >
                            Thông tin nhóm
                        </Text>
                    }
                />
            </Accordion.Control>
            <Accordion.Panel>
                <Stack>
                    {subject ? (
                        <InfoGroup label="Môn đăng ký" value={subject} />
                    ) : null}
                    {typeof students === "number" ? (
                        <StudentInputGroup />
                    ) : null}
                    {lessons ? (
                        <InfoGroup label="Số lượng buổi học" value={lessons} />
                    ) : null}
                    {duration ? (
                        <InfoGroup
                            label="Thời lượng buổi học"
                            value={duration}
                        />
                    ) : null}
                    {location ? (
                        <InfoGroup label="Địa điểm" value={location} />
                    ) : null}
                    {schedule?.map((time, index) => (
                        <InfoGroup
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
                        <InfoGroup label="Tên TA phụ trách" value={ta.name} />
                    ) : null}
                </Stack>
            </Accordion.Panel>
        </>
    );
}
