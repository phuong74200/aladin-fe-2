import { ReactNode } from "react";
import { SimpleGrid, Spoiler, Text } from "@mantine/core";

interface SpoilerGroupProps {
    label: ReactNode;
    value: ReactNode;
}

const FONT_SIZE = 14;
const LINE_HEIGHT_IN_REM = 16 / 14;
const DISPLAY_LINES = 3;

export default function SpoilerGroup({ label, value }: SpoilerGroupProps) {
    return (
        <SimpleGrid cols={2} spacing="lg" verticalSpacing="sm">
            <Text weight="bold">{label}</Text>
            <Spoiler
                maxHeight={FONT_SIZE * LINE_HEIGHT_IN_REM * DISPLAY_LINES}
                showLabel="Thêm"
                hideLabel="Ẩn"
                style={{ fontSize: FONT_SIZE }}
            >
                {value}
            </Spoiler>
        </SimpleGrid>
    );
}
