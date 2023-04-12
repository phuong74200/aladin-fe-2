import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  input: {
    height: "1.356rem",
    minHeight: "1.356rem",
    padding: 0,
    "&[disabled]": {
      opacity: 1,
      color: "initial",
    },
  },
}));
