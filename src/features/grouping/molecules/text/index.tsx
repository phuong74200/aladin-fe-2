import { ReactNode } from "react";
import { SimpleGrid, Text as MantineText } from "@mantine/core";

interface InfoGroupProps {
    label: ReactNode;
    value: ReactNode;
}

export default function Text({ label, value }: InfoGroupProps) {
    return (
        <SimpleGrid cols={2} spacing="lg" verticalSpacing="sm">
            <MantineText weight="bold">{label}</MantineText>
            <MantineText>{value}</MantineText>
        </SimpleGrid>
    );
}
