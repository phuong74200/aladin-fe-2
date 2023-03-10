import { Flex, Text, TextInput, TextInputProps } from "@mantine/core";

import { styles } from "./style";

export default function CouponInput(props: TextInputProps) {
    return (
        <Flex justify="space-between" align="center" mb={-7}>
            <Text weight="bold">Mã khuyến mãi</Text>
            <TextInput
                w={150}
                styles={styles}
                defaultValue={1}
                variant="unstyled"
                placeholder="Mã khuyến mãi"
                {...props}
            />
        </Flex>
    );
}
