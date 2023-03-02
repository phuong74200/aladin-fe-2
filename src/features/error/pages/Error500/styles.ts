import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    root: {
        height: "100vh",
        padding: "0 16px",
        backgroundColor: theme.fn.variant({
            variant: "filled",
            color: theme.primaryColor,
        }).background,
    },

    inner: {
        position: "relative",
    },

    image: {
        position: "absolute",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 0,
        opacity: 0.65,
    },

    content: {
        paddingTop: 220,
        position: "relative",
        zIndex: 1,

        [theme.fn.smallerThan("sm")]: {
            paddingTop: 120,
        },
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        textAlign: "center",
        fontWeight: 900,
        fontSize: 38,
        color: theme.white,

        [theme.fn.smallerThan("sm")]: {
            fontSize: 32,
        },
    },

    description: {
        maxWidth: 460,
        margin: "auto",
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.xl * 1.5,
        color: theme.colors[theme.primaryColor][1],
    },
}));
