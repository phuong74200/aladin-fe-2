import { ReactNode } from "react";
import { Group, Text } from "@mantine/core";

interface DetailGroupProps {
    label: ReactNode;
    value: ReactNode;
    last?: ReactNode;
}

export default function DetailGroup({ label, value, last }: DetailGroupProps) {
    return (
        <Group position="apart">
            <Text weight="bold">{label}</Text>
            <Text>
                {value}
                {last}
            </Text>
        </Group>
    );
}
