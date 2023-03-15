import { Center, Stack } from "@mantine/core";

import FormTitle from "~/features/authentication/components/FormTitle";

export default function Payment() {
    return (
        <Stack h={500} justify="space-between">
            <Center>
                <FormTitle title="Thanh toán" />
            </Center>
        </Stack>
    );
}
