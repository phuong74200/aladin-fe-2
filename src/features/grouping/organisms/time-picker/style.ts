import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    table: {
        width: "100%",
        borderSpacing: 0,
        fontSize: theme.fontSizes.sm,
        height: "100%",
        tableLayout: "fixed",

        "th, td": {
            padding: theme.spacing.md,
        },

        tbody: {
            tr: {
                th: {
                    textAlign: "left",
                },
                td: {
                    border: "1px solid #282A35",
                },
                "th:nth-of-type(1)": {},
            },
            "tr:nth-of-type(1)": {
                th: {
                    textAlign: "center",
                },
            },
            "tr:nth-of-type(2)": {
                "td:nth-of-type(1)": {
                    borderTopLeftRadius: theme.radius.lg,
                },
                "td:nth-last-of-type(1)": {
                    borderTopRightRadius: theme.radius.lg,
                },
            },
            "tr:nth-last-of-type(1)": {
                "td:nth-of-type(1)": {
                    borderBottomLeftRadius: theme.radius.lg,
                },
                "td:nth-last-of-type(1)": {
                    borderBottomRightRadius: theme.radius.lg,
                },
            },
        },
    },
}));
