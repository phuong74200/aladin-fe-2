import { createStyles, MantineTheme } from "@mantine/core";

export const useStyles = createStyles(() => ({
  md__half_w: {
    minWidth: "33%",
    width: "33%",
  },
  overflow: {
    overflow: "auto",
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
