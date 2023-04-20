import { createStyles, MantineTheme } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  md__half_w: {
    minWidth: "33%",
    width: "33%",
  },
  overflow: {
    overflow: "auto",
  },
  gradientText: {
    background: theme.fn.linearGradient(133, "#041EA0", "#1078EC"),
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
}));

export const accordion = (theme: MantineTheme) => ({
  item: {
    borderBottom: "none",
  },
  content: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
});
