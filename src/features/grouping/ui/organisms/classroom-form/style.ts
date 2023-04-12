import { createStyles, MantineTheme, ModalBaseStylesNames, rem, Styles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  paper: {
    minHeight: 0,
    flexGrow: 1,
  },
}));

export const modalStyles = ((): Styles<ModalBaseStylesNames> => ({
  content: {
    backgroundColor: "transparent",
    boxShadow: "none",
    height: "100%",
  },
  body: {
    height: "100%",
  },
  inner: {
    margin: "8vh 0",
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

export const stepperStyles = () => ({
  stepBody: {
    display: "none",
  },
  step: {
    padding: 0,
  },
  stepIcon: {
    borderWidth: rem(4),
  },
  separator: {
    marginLeft: rem(-2),
    marginRight: rem(-2),
    height: rem(10),
  },
});
