import { createStyles, MantineTheme } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
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
}));

export const appShellStyles = (theme: MantineTheme) => ({
  main: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
    minHeight: "100vh",
    display: "flex",
    gap: theme.spacing.lg,
  },
});
