import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    fixed_header: {
        tableLayout: "fixed",
        borderCollapse: "collapse",
        height: "100%",
        flex: "0 1 auto",
        borderRadius: theme.radius.md,
        overflow: "hidden",
        width: "100%",
    },
    tbody: {
        display: "block",
        width: "100%",
        overflow: "auto",
        height: "100%",
        flex: "0 1 auto",

        "::-webkit-scrollbar": {
            display: "none",
        },
    },
    headData: {
        padding: "5px",
        textAlign: "left",
        width: "20%",
        float: "left",
    },
    tr: {
        width: "100%",
        display: "flex",
        cursor: "pointer",
    },
    thead: {
        tr: {
            display: "block",
        },
    },
}));
