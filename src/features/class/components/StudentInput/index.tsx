import { Flex, NumberInput, NumberInputProps, Text } from "@mantine/core";
import { IconUserCircle } from "@tabler/icons";

export default function StudentInput(props: NumberInputProps) {
    return (
        <Flex justify="space-between" align="center" mb={-7}>
            <Text weight="bold">Số lượng sinh viên</Text>
            <NumberInput
                icon={<IconUserCircle size={16} />}
                w={150}
                defaultValue={1}
                placeholder="Số lượng sinh viên"
                withAsterisk
                {...props}
            />
        </Flex>
    );
}
