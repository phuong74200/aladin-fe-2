import { Flex, NumberInput, NumberInputProps, Text } from "@mantine/core";

import { styles } from "./style";

export default function StudentInput(props: NumberInputProps) {
    return (
        <Flex justify="space-between" align="center" mb={-7}>
            <Text weight="bold">Số lượng sinh viên</Text>
            <NumberInput
                styles={styles}
                w={150}
                min={0}
                max={10}
                defaultValue={undefined}
                placeholder="Số lượng sinh viên"
                withAsterisk
                variant="unstyled"
                {...props}
            />
        </Flex>
    );
}
