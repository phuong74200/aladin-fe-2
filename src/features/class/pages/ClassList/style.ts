import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    fixed: {
        tableLayout: "fixed",
    },
    fullHeightOverflow: {
        overflow: "auto",
        height: "100%",
        display: "block !important",
    },
    sticky: {
        th: {
            position: "sticky",
            top: 0,
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
            "&:first-child": {
                borderTopLeftRadius: theme.radius.lg,
            },
            "&:last-child": {
                borderTopRightRadius: theme.radius.lg,
            },
        },
    },
    fixed_header: {
        tableLayout: "fixed",
        borderCollapse: "collapse",
        height: "100%",
        flex: "0 1 auto",
        borderRadius: theme.radius.md,
        overflow: "hidden",

        tbody: {
            display: "block",
            width: "100%",
            overflow: "auto",
            height: "100%",
            flex: "0 1 auto",
        },

        th: {
            padding: "5px",
            textAlign: "left",
            width: "200px",
        },
        td: {
            padding: "5px",
            textAlign: "left",
            width: "200px",
        },

        thead: {
            // background: "black",
            // color: "#fff",
            tr: {
                display: "block",
            },
        },
    },
}));
