/* eslint-disable react/no-unknown-property */

import { MantineColor, TableProps } from "@mantine/core";

import { useStyles } from "./style";

// type TextAlign =
//   | "left"
//   | "right"
//   | "-moz-initial"
//   | "inherit"
//   | "initial"
//   | "revert"
//   | "unset"
//   | "center"
//   | "end"
//   | "start"
//   | "justify"
//   | "match-parent";

interface ScrollTableProps extends TableProps {
  color?: MantineColor;
}

export default function ScrollTable(props: ScrollTableProps) {
  const { classes } = useStyles({ color: props.color });

  return (
    <div className={classes.table}>
      <table {...props} width="100%" style={{ borderSpacing: 0, borderCollapse: "collapse" }} />
    </div>
  );
}
