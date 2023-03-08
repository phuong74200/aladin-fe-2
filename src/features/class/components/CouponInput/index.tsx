import { Flex, Text, TextInput, TextInputProps } from "@mantine/core";
import { IconTicket } from "@tabler/icons";

export default function CouponInput(props: TextInputProps) {
    return (
        <Flex justify="space-between" align="center" mb={-7}>
            <Text weight="bold">Mã khuyến mãi</Text>
            <TextInput
                w={150}
                styles={{
                    error: {
                        textAlign: "right",
                    },
                }}
                icon={<IconTicket size={16} />}
                defaultValue={1}
                placeholder="Mã khuyến mãi"
                {...props}
            />
        </Flex>
    );
}
