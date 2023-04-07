import { createStyles } from "@mantine/core";

export const useStyles = createStyles(() => ({
  scrollArea: {
    overflow: "auto",
    "::-webkit-scrollbar": {
      display: "none",
    },
  },
}));
