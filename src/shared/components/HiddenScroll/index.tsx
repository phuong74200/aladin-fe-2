import { Box, BoxProps } from "@mantine/core";

import { useStyles } from "./style";

export default function HiddenScroll(props: BoxProps) {
  const { classes } = useStyles();

  return (
    <Box {...props} className={classes.scrollArea}>
      {props.children}
    </Box>
  );
}
