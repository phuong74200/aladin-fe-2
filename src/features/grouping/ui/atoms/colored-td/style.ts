import { createStyles, MantineColor } from "@mantine/core";

interface Params {
  color?: MantineColor;
}

export const useStyles = createStyles((theme, { color = "gray" }: Params) => ({
  td: {
    background: theme.colorScheme === "dark" ? theme.colors[color][8] : theme.colors[color][0],
    "&:hover": {
      background: theme.colors.gray[2],
    },
  },
}));
