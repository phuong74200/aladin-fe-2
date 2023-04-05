import { Center, Paper } from "@mantine/core";

import { useStyles } from "./style";

import ItemNotFound from "~/features/layout/components/ItemNotFound";

export default function NotFound() {
    const { classes, cx } = useStyles();

    return (
        <Paper
            className={cx(classes.md__half_w, classes.overflow)}
            shadow="md"
            p="lg"
        >
            <Center w="100%" h="100%">
                <ItemNotFound p="lg" />
            </Center>
        </Paper>
    );
}
