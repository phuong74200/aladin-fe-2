import {
    Accordion,
    Divider,
    Stack,
    Text,
    useMantineTheme,
} from "@mantine/core";

import InfoGroup from "../../molecules/InfoGroup";

export interface PersonalAccordionProps {
    name?: string;
    phone?: string;
    email?: string;
}

export default function PersonalAccordion({
    name,
    phone,
    email,
}: PersonalAccordionProps) {
    const theme = useMantineTheme();

    return (
        <>
            <Accordion.Control>
                <Divider
                    label={
                        <Text
                            color={theme.primaryColor}
                            weight="bold"
                            size="md"
                        >
                            Thông cá nhân
                        </Text>
                    }
                />
            </Accordion.Control>
            <Accordion.Panel>
                <Stack>
                    {name ? <InfoGroup label="Họ và tên" value={name} /> : null}
                    {phone ? (
                        <InfoGroup label="Số điện thoại" value={phone} />
                    ) : null}
                    {email ? <InfoGroup label="Email" value={name} /> : null}
                </Stack>
            </Accordion.Panel>
        </>
    );
}
