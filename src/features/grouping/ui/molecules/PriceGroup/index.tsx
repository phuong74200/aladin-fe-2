import { ReactNode } from "react";
import { Group, Text } from "@mantine/core";

import Currency from "../../atoms/Currency";

interface PriceGroupProps {
    label: ReactNode;
    value: ReactNode;
}

export default function PriceGroup({ label, value }: PriceGroupProps) {
    return (
        <Group position="apart">
            <Text weight="bold">{label}</Text>
            <Text>
                {value}
                <Currency label="VND" />
            </Text>
        </Group>
    );
}
