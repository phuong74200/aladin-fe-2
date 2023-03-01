import { createStyles, keyframes } from "@mantine/core";

export const fadeIn = keyframes({
    from: {
        opacity: 0,
        transform: "translate(-20px, 0)",
    },
    to: {
        opacity: 1,
        transform: "translate(0px, 0px)",
    },
});

export const fadeOut = keyframes({
    from: {
        opacity: 1,
        transform: "translate(0px, 0px)",
    },
    to: {
        transform: "translate(-20px, 0)",
        opacity: 0,
    },
});

export const useStyles = createStyles((_theme) => ({
    fadeIn: {
        animation: `0.25s ${fadeIn} forwards`,
    },
    fadeOut: {
        animation: `0.1s ${fadeOut} forwards`,
    },
}));
