import {
    Accordion,
    Divider,
    Stack,
    Text as MantineText,
    useMantineTheme,
} from "@mantine/core";

import Text from "../../molecules/text";

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
                        <MantineText
                            color={theme.primaryColor}
                            weight="bold"
                            size="md"
                        >
                            Thông tin cá nhân
                        </MantineText>
                    }
                />
            </Accordion.Control>
            <Accordion.Panel>
                <Stack>
                    {name ? <Text label="Họ và tên" value={name} /> : null}
                    {phone ? (
                        <Text label="Số điện thoại" value={phone} />
                    ) : null}
                    {email ? <Text label="Email" value={email} /> : null}
                </Stack>
            </Accordion.Panel>
        </>
    );
}
