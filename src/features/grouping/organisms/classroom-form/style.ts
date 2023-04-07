import { createStyles, MantineTheme, ModalBaseStylesNames, Styles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  modal: {
    background: "transparent",
  },
}));

export const modalStyles = ((): Styles<ModalBaseStylesNames> => ({
  content: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
}))();

export const accordionStyles = (theme: MantineTheme) => ({
  item: {
    borderBottom: "none",
  },
  content: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
});
