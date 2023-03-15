import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
    noPaddingTop: {
        '[role="radiogroup"]': {
            paddingTop: 0,
        },
    },
}));
