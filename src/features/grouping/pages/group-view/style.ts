import { createStyles, MantineTheme } from "@mantine/core";

export const stepStyles = { stepIcon: { display: "none" } };

export const useStyles = createStyles((theme) => ({
    hightlight: {
        color: theme.colors.blue[6],
    },
}));

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
