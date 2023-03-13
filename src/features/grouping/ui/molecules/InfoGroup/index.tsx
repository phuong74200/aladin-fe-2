import { ReactNode } from "react";
import { SimpleGrid, Text } from "@mantine/core";

interface InfoGroupProps {
    label: ReactNode;
    value: ReactNode;
    last?: ReactNode;
}

export default function InfoGroup({ label, value, last }: InfoGroupProps) {
    return (
        <SimpleGrid cols={2} spacing="lg" verticalSpacing="sm">
            <Text weight="bold">{label}</Text>
            <Text>
                {value}
                {last}
            </Text>
        </SimpleGrid>
    );
}
