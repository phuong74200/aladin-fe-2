import {
    Accordion,
    Divider,
    Stack,
    Text as MantineText,
    useMantineTheme,
} from "@mantine/core";
import dayjs from "dayjs";

import DividerControl from "../../molecules/divider-control";
import NumberInput from "../../molecules/number-input";
import SpoilerGroup from "../../molecules/spoiler";
import Text from "../../molecules/text";

import Display from "~/shared/components/display";

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

export default function ClassroomInfo({
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
            <DividerControl textProps={{ color: theme.primaryColor }}>
                Thông tin nhóm
            </DividerControl>
            <Accordion.Panel>
                <Stack>
                    <Display mounted={subject}>
                        <Text label="Môn đăng ký" value={subject} />
                    </Display>
                    <Display mounted={typeof students === "number"}>
                        <NumberInput
                            label="Số lượng sinh viên"
                            placeholder="Số lượng sinh viên"
                        />
                    </Display>
                    <Display mounted={lessons}>
                        <Text label="Số lượng buổi học" value={lessons} />
                    </Display>
                    <Display mounted={duration}>
                        <Text label="Thời lượng buổi học" value={duration} />
                    </Display>
                    <Display mounted={location}>
                        <Text label="Địa điểm" value={location} />
                    </Display>
                    {schedule?.map((time, index) => (
                        <Text
                            key={time.getTime()}
                            label={`Thời gian buổi ${index + 1}`}
                            value={dayjs(time).format("DD/MM/YYYY")}
                        />
                    ))}
                    <Display mounted={description}>
                        <SpoilerGroup
                            label="Nội dung buổi học"
                            value={description}
                        />
                    </Display>
                    {ta?.name ? (
                        <Text label="Tên TA phụ trách" value={ta.name} />
                    ) : null}
                </Stack>
            </Accordion.Panel>
        </>
    );
}
