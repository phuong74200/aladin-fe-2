import { PropsWithChildren } from "react";
import { Table as MantineTable, Text } from "@mantine/core";

import { useStyles } from "./style";

function TableData({ children }: PropsWithChildren) {
  const { classes } = useStyles();
  return (
    <td className={classes.headData}>
      <Text lineClamp={1}>{children}</Text>
    </td>
  );
}

function TableHead({ children }: PropsWithChildren) {
  const { classes, cx } = useStyles();
  return <th className={cx(classes.headData, classes.thead)}>{children}</th>;
}

function TableBody({ children }: PropsWithChildren) {
  const { classes } = useStyles();
  return <tbody className={classes.tbody}>{children}</tbody>;
}

function TableRow({ children }: PropsWithChildren) {
  const { classes } = useStyles();
  return <tr className={classes.tr}>{children}</tr>;
}

function Table({ children }: PropsWithChildren) {
  const { classes } = useStyles();
  return <MantineTable className={classes.fixed_header}>{children}</MantineTable>;
}

Table.Data = TableData;
Table.Body = TableBody;
Table.Head = TableHead;
Table.Row = TableRow;

export default Table;
