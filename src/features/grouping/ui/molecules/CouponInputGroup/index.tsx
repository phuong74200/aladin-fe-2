import { SimpleGrid, Text, TextInput, TextInputProps } from "@mantine/core";

import { styles } from "./style";

export default function CouponInputGroup(props: TextInputProps) {
    return (
        <SimpleGrid cols={2} spacing="lg" verticalSpacing="sm">
            <Text weight="bold">Mã khuyến mãi</Text>
            <TextInput
                w="100%"
                defaultValue={undefined}
                variant="unstyled"
                placeholder="Mã khuyến mãi"
                styles={styles}
                {...props}
            />
        </SimpleGrid>
    );
}
