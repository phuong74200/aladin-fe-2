import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  inner: {
    height: 64,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  defaultLink: {
    color: "initial",
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  md_show: {
    display: "none",
    [theme.fn.smallerThan("sm")]: {
      display: "block",
    },
  },

  md_hide: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.lg,
    textDecoration: "none",
    color: theme.colors[theme.primaryColor][7],
    fontSize: theme.fontSizes.md,
    fontWeight: "bolder",

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));
