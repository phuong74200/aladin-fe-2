import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  input: {
    borderRadius: theme.radius.lg,
    border: "1px solid rgb(206, 212, 218)",
    width: "100% !important",
    aspectRatio: "1 / 1",
    fontSize: theme.fontSizes.lg,
  },
  focus: {
    outline: `${theme.colors[theme.primaryColor][4]} solid 1px`,
  },
  container: {
    gap: 16,
  },
}));
