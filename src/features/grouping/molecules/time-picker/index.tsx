import { Popover, SimpleGrid, Text } from "@mantine/core";

interface TimePickerProps {
    label?: string;
}

export default function TimePicker(props: TimePickerProps) {
    return (
        <SimpleGrid cols={2} spacing="lg" verticalSpacing="sm">
            <Text weight="bold">{props.label}</Text>

            <Popover width={200} position="bottom" withArrow shadow="md">
                <Popover.Target>
                    <Text weight="bold">{props.label}</Text>
                </Popover.Target>
                <Popover.Dropdown>
                    <Text size="sm">
                        This is uncontrolled popover, it is opened when button
                        is clicked
                    </Text>
                </Popover.Dropdown>
            </Popover>
        </SimpleGrid>
    );
}
