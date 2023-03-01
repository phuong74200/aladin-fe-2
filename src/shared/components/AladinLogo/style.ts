import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    gradientText: {
        background: theme.fn.linearGradient(133, "#041EA0", "#1078EC"),
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontFamily: "overnap",
        userSelect: "none",
        cursor: "pointer",
    },
}));
