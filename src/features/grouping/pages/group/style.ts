import { createStyles, MantineTheme } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    relative: {
        position: "relative",
    },
    hightlight: {
        color: theme.colors.blue[6],
    },
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
        minWidth: "33%",
        width: "33%",
    },
    overflowTab: {
        flex: 1,
        overflow: "auto",
    },
    overflow: {
        overflow: "auto",
    },
    fixed: {
        tableLayout: "fixed",
    },
    fixed_header: {
        tableLayout: "fixed",
        borderCollapse: "collapse",
        height: "100%",
        flex: "0 1 auto",
        borderRadius: theme.radius.md,
        overflow: "hidden",
        width: "100%",

        tbody: {
            display: "block",
            width: "100%",
            overflow: "auto",
            height: "100%",
            flex: "0 1 auto",

            "::-webkit-scrollbar": {
                display: "none",
            },

            tr: {
                width: "100%",
                display: "flex",
                cursor: "pointer",
            },
        },

        "th, td": {
            padding: "5px",
            textAlign: "left",
            width: "20%",
            float: "left",
        },

        thead: {
            tr: {
                display: "block",
            },
        },
    },
}));

export const appShellStyles = (theme: MantineTheme) => ({
    main: {
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
        height: "100vh",
        display: "flex",
        gap: theme.spacing.lg,
    },
});

export const stepper = { steps: { padding: 16 } };
export const accordion = (theme: MantineTheme) => ({
    item: {
        borderBottom: "none",
    },
    content: {
        paddingTop: theme.spacing.md,
        paddingBottom: theme.spacing.md,
    },
});

export const createBtn: React.CSSProperties = {
    position: "absolute",
    bottom: 8,
    right: 8,
};
