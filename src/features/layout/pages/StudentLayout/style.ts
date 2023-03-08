import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    m_md_hidden: {
        [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            display: "none",
        },
    },
    form: {
        [`@media (max-width: ${theme.breakpoints.lg}px)`]: {
            maxWidth: 500,
            margin: "0 auto",
        },
    },
    stack: { display: "flex", flexDirection: "column" },
    md__half_w: {
        width: "33%",
        [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
            width: "50%",
        },
    },
}));
