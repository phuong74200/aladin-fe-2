import { NumberInput, NumberInputProps, SimpleGrid, Text } from "@mantine/core";

import { styles } from "./style";

export default function StudentInputGroup(props: NumberInputProps) {
    return (
        <SimpleGrid cols={2} spacing="lg" verticalSpacing="sm">
            <Text weight="bold">Số lượng sinh viên</Text>
            <NumberInput
                w="100%"
                defaultValue={undefined}
                variant="unstyled"
                placeholder="Số lượng sinh viên"
                styles={styles}
                {...props}
            />
        </SimpleGrid>
    );
}
