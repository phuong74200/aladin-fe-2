import { Group, Radio, Text } from "@mantine/core";

export default function PayGroup() {
    return (
        <Group position="apart">
            <Text weight="bold">Thanh toán bằng</Text>
            <Radio.Group
                withAsterisk
                style={{ paddingTop: "999px !important" }}
            >
                <Group>
                    <Radio value="react" label="Ngân hàng" />
                    <Radio value="svelte" label="Momo" />
                    <Radio value="ng" label="Zalo pay" />
                </Group>
            </Radio.Group>
        </Group>
    );
}
