import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    m_md_hidden: {
        [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            display: "none",
        },
    },
}));
