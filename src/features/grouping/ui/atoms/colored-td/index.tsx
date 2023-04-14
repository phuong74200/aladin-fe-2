import { MantineColor } from "@mantine/core";

import { useStyles } from "./style";

interface TDProps
  extends React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableDataCellElement>,
    HTMLTableDataCellElement
  > {
  color: MantineColor;
  children?: React.ReactNode;
}

export default function TD({ color, children, ...rest }: TDProps) {
  const { classes, cx } = useStyles({ color });

  return (
    <td className={cx(classes.td, rest.className)} {...rest}>
      {children}
    </td>
  );
}
