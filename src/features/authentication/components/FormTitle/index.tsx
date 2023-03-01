import { Stack, Text, Title } from "@mantine/core";

import { useStyles } from "./style";

interface FormTitle {
    title?: string;
    content?: string;
}

export default function FormTitle(props: FormTitle) {
    const { classes } = useStyles();
    return (
        <Stack spacing={0} mb="lg" ml="md" className={classes.m_md_hidden}>
            {props.title && <Title weight="bolder">{props.title}</Title>}
            {props.content && <Text size="sm">{props.content}</Text>}
        </Stack>
    );
}
