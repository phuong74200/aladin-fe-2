import { createStyles, MantineColor } from "@mantine/core";

interface Params {
  color?: MantineColor;
}

export const useStyles = createStyles((theme, { color = "gray" }: Params) => ({
  table: {
    borderRadius: theme.radius.md,
    minHeight: 0,
    fontSize: theme.fontSizes.sm,
    flexGrow: 1,
    overflow: "auto",
    width: "100%",
    borderCollapse: "collapse",
    "::-webkit-scrollbar": {
      display: "none",
    },
    thead: {
      tr: {
        background: theme.colors[color][0],
        color: theme.colors[color][7],
        position: "sticky",
        top: 0,
      },
    },
    tbody: {
      tr: {
        borderBottom: `2px solid ${theme.colors[color][0]}`,
      },
      "tr:last-child": {
        borderBottom: "none",
      },
      td: {
        cursor: "pointer",
      },
    },
    tr: {
      "td, th": {
        padding: "1rem 2rem",
      },
      "&:hover": {
        background: theme.colors[color][0],
      },
    },
    "tr, th": {
      textAlign: "left",
    },
  },
}));
