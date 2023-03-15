import {
    Select as SelectBase,
    SelectProps,
    SimpleGrid,
    Text,
} from "@mantine/core";

import { styles } from "./style";

export default function Select(props: SelectProps) {
    return (
        <SimpleGrid cols={2} spacing="lg" verticalSpacing="sm">
            <Text weight="bold">{props.label}</Text>
            <SelectBase
                {...props}
                w="100%"
                variant="unstyled"
                styles={styles}
                label={undefined}
            />
        </SimpleGrid>
    );
}
