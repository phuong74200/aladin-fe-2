import { createStyles, MantineColor } from "@mantine/core";

interface Params {
  color?: MantineColor;
}

export const useStyles = createStyles((theme, { color = "red" }: Params) => ({
  table: {
    borderCollapse: "collapse",
    tableLayout: "auto",
    thead: {
      tr: {
        borderTop: `1px solid ${theme.colors[color][5]}`,
        borderBottom: `1px solid ${theme.colors[color][5]}`,
      },
    },
    tr: {
      "td, th": {
        padding: "0.5rem 2rem",
      },
    },
    tbody: {
      "tr td": {
        borderBottom: `1px solid ${theme.colors[color][5]}`,
        borderRight: `1px solid ${theme.colors[color][5]}`,
      },
      "tr:last-child td": {
        borderBottom: `none`,
      },
      "tr td:last-child": {
        borderRight: `none`,
      },
      // select the first column
      "tr td:nth-of-type(1)": {
        fontWeight: "bold",
        borderRight: `1px solid ${theme.colors[color][5]}`,
        borderBottom: "none",
        width: 0,
        whiteSpace: "nowrap",
      },
    },
  },
  timeSlot: {
    cursor: "pointer",
    transition: "all 50ms ease-in",
    "&:hover": {
      background: theme.colors[color][1],
    },
    "&:hover button": {
      opacity: 1,
    },
    button: {
      opacity: 0,
    },
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
